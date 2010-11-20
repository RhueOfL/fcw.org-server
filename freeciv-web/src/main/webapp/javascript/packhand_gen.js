 /* Generated by generate_js_hand.py */
function client_handle_packet(p) 
{
 if (p == null) return;
 try {
  for (var i = 0; i < p.length; i++) {
    if (p[i] == null) continue;
    var packet_type = p[i]['packet_type'];
    switch (packet_type) {

    case  "processing_started":
      handle_processing_started(p[i]);
      break;

    case  "processing_finished":
      handle_processing_finished(p[i]);
      break;

    case  "freeze_hint":
      handle_freeze_hint(p[i]);
      break;

    case  "thaw_hint":
      handle_thaw_hint(p[i]);
      break;

    case  "server_join_reply":
      handle_server_join_reply(p[i]);
      break;

    case  "authentication_req":
      handle_authentication_req(p[i]);
      break;

    case  "server_shutdown":
      handle_server_shutdown(p[i]);
      break;

    case  "endgame_report":
      handle_endgame_report(p[i]);
      break;

    case  "tile_info":
      handle_tile_info(p[i]);
      break;

    case  "game_info":
      handle_game_info(p[i]);
      break;

    case  "map_info":
      handle_map_info(p[i]);
      break;

    case  "nuke_tile_info":
      handle_nuke_tile_info(p[i]);
      break;

    case  "chat_msg":
      handle_chat_msg(p[i]);
      break;

    case  "city_remove":
      handle_city_remove(p[i]);
      break;

    case  "city_info":
      handle_city_info(p[i]);
      break;

    case  "city_short_info":
      handle_city_short_info(p[i]);
      break;

    case  "city_name_suggestion_info":
      handle_city_name_suggestion_info(p[i]);
      break;

    case  "city_sabotage_list":
      handle_city_sabotage_list(p[i]);
      break;

    case  "player_remove":
      handle_player_remove(p[i]);
      break;

    case  "player_info":
      handle_player_info(p[i]);
      break;

    case  "player_attribute_chunk":
      handle_player_attribute_chunk(p[i]);
      break;

    case  "unit_remove":
      handle_unit_remove(p[i]);
      break;

    case  "unit_info":
      handle_unit_info(p[i]);
      break;

    case  "unit_short_info":
      handle_unit_short_info(p[i]);
      break;

    case  "unit_combat_info":
      handle_unit_combat_info(p[i]);
      break;

    case  "ruleset_specialist":
      handle_ruleset_specialist(p[i]);
      break;

    case  "unit_diplomat_answer":
      handle_unit_diplomat_answer(p[i]);
      break;

    case  "diplomacy_init_meeting":
      handle_diplomacy_init_meeting(p[i]);
      break;

    case  "diplomacy_cancel_meeting":
      handle_diplomacy_cancel_meeting(p[i]);
      break;

    case  "diplomacy_create_clause":
      handle_diplomacy_create_clause(p[i]);
      break;

    case  "diplomacy_remove_clause":
      handle_diplomacy_remove_clause(p[i]);
      break;

    case  "diplomacy_accept_treaty":
      handle_diplomacy_accept_treaty(p[i]);
      break;

    case  "page_msg":
      handle_page_msg(p[i]);
      break;

    case  "conn_info":
      handle_conn_info(p[i]);
      break;

    case  "conn_ping_info":
      handle_conn_ping_info(p[i]);
      break;

    case  "conn_ping":
      handle_conn_ping(p[i]);
      break;

    case  "end_phase":
      handle_end_phase(p[i]);
      break;

    case  "start_phase":
      handle_start_phase(p[i]);
      break;

    case  "new_year":
      handle_new_year(p[i]);
      break;

    case  "spaceship_info":
      handle_spaceship_info(p[i]);
      break;

    case  "ruleset_unit":
      handle_ruleset_unit(p[i]);
      break;

    case  "ruleset_game":
      handle_ruleset_game(p[i]);
      break;

    case  "ruleset_government_ruler_title":
      handle_ruleset_government_ruler_title(p[i]);
      break;

    case  "ruleset_tech":
      handle_ruleset_tech(p[i]);
      break;

    case  "ruleset_government":
      handle_ruleset_government(p[i]);
      break;

    case  "ruleset_terrain_control":
      handle_ruleset_terrain_control(p[i]);
      break;

    case  "ruleset_nation":
      handle_ruleset_nation(p[i]);
      break;

    case  "ruleset_city":
      handle_ruleset_city(p[i]);
      break;

    case  "ruleset_building":
      handle_ruleset_building(p[i]);
      break;

    case  "ruleset_terrain":
      handle_ruleset_terrain(p[i]);
      break;

    case  "ruleset_control":
      handle_ruleset_control(p[i]);
      break;

    case  "single_want_hack_reply":
      handle_single_want_hack_reply(p[i]);
      break;

    case  "game_load":
      handle_game_load(p[i]);
      break;

    case  "options_settable_control":
      handle_options_settable_control(p[i]);
      break;

    case  "options_settable":
      handle_options_settable(p[i]);
      break;

    case  "ruleset_choices":
      handle_ruleset_choices(p[i]);
      break;

    case  "ruleset_nation_groups":
      handle_ruleset_nation_groups(p[i]);
      break;

    case  "ruleset_unit_class":
      handle_ruleset_unit_class(p[i]);
      break;

    case  "ruleset_base":
      handle_ruleset_base(p[i]);
      break;

    case  "ruleset_effect":
      handle_ruleset_effect(p[i]);
      break;

    case  "ruleset_effect_req":
      handle_ruleset_effect_req(p[i]);
      break;

    case  "ruleset_resource":
      handle_ruleset_resource(p[i]);
      break;

    case  "freeze_client":
      handle_freeze_client(p[i]);
      break;

    case  "thaw_client":
      handle_thaw_client(p[i]);
      break;

    case  "begin_turn":
      handle_begin_turn(p[i]);
      break;

    case  "end_turn":
      handle_end_turn(p[i]);
      break;

    case  "scenario_info":
      handle_scenario_info(p[i]);
      break;

    case  "vote_new":
      handle_vote_new(p[i]);
      break;

    case  "vote_update":
      handle_vote_update(p[i]);
      break;

    case  "vote_remove":
      handle_vote_remove(p[i]);
      break;

    case  "vote_resolve":
      handle_vote_resolve(p[i]);
      break;

    case  "edit_object_created":
      handle_edit_object_created(p[i]);
      break;

    case  "connect_msg":
      handle_connect_msg(p[i]);
      break;

    case  "goto_path":
      handle_goto_path(p[i]);
      break;
 
    }
  }
 
  if (p.length > 0) {
    update_map_canvas_full();
  } else {
    update_map_canvas_check();
  }

 } catch(e) {
   if (e.message != null && e.fileName != null && e.lineNumber != null) {
     js_breakpad_report(e.message, e.fileName, e.lineNumber);
   } else if (e.message != null) {
     js_breakpad_report(e.message, "generate_js_hand.py", 0);
   } else {
     js_breakpad_report("unknown network error", "generate_js_hand.py", 0);
   }
 }

}
