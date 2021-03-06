/*******************************************************************************
 * Freeciv-web - the web version of Freeciv. http://play.freeciv.org/
 * Copyright (C) 2009-2017 The Freeciv-web project
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *******************************************************************************/
package org.freeciv.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.freeciv.persistence.DbManager;
import org.freeciv.util.Constants;

/**
 * Displays detailed information about a server's gametype
 *
 * URL: /get_game_type
 */
@MultipartConfig
public class GetGameType extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	    response.setHeader("Content-Type", "text/plain");
		String sHost = request.getParameter("host");
		String sPort = request.getParameter("port");
		
		int port;
        if (sPort == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Port must be supplied.");
            return;
        }
        
        port = Integer.parseInt(sPort);
        if ((port < 1024) || (port > 65535)) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid port supplied. Expected a number between 1024 and 65535");            
            return;
        }
        
        if (sHost == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Host parameter is required to perform this request.");
            return;
        }		

		String hostPort = sHost + ':' + sPort;
		String query;
		Connection conn = null;
		PreparedStatement statement = null;
		ResultSet rs = null;
		
		try {
			Context env = (Context) (new InitialContext().lookup(Constants.JNDI_CONNECTION));
			DataSource ds = (DataSource) env.lookup(Constants.JNDI_DDBBCON_MYSQL);
			conn = ds.getConnection();
        
			query = DbManager.getQuerySelectServers();

			statement = conn.prepareStatement(query);
			statement.setString(1, sHost);
			statement.setInt(2, port);
			rs = statement.executeQuery();
			String type = "";
            if (rs.next()) {				
				type =  rs.getString("type");
			}
            response.getOutputStream().print(type);
            return;               
        }        
        catch (Exception err) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Bad request while probing the game type.");
			return;
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
