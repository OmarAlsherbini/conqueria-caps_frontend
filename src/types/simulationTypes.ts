import { Dict } from "pixi.js";
import { Sprite } from '@pixi/sprite';
import { Graphics } from '@pixi/graphics';

export interface TroopEvent {
  timestamp: number;
  troop_id: number;
  event_type: 'damage' | 'death' | 'start' | 'reach_target';
  data: any;
}

export interface TroopEvent2 {
  timestamp: number;
  troop_id: number;
  attack_unit_id: number;
  path_id: number;
  event_type: 'damage' | 'death' | 'start' | 'reach_target';
  data: any;
}

export interface TurretEvent {
  timestamp: number;
  event_type: 'rotate' | 'fire' | 'damage' | 'destroyed';
  angle?: number;
  target_troop_id?: number;
}

export interface TurretEvent2 {
  timestamp: number;
  turret_id: number;
  defensive_building_id: number;
  event_type: 'rotate' | 'fire' | 'damage' | 'destroyed';
  angle?: number;
  data: any;
}

export interface TurretInfo {
  id: number;
  defensive_building_id: number;
  position: { x: number; y: number; };
  stats: {
    damage: number;
    range: number;
    firerate: number;
    accuracy: number;
    cone_angle: number;
  };
  hp: number;
  max_hp: number;
}

export interface TroopInfo {
  id: number;
  type: "troop" | "vehicle" | "air" | "sea";
  in_game_picture: string;
  health_points: number;
  damage: number;
  speed: number;
  accuracy: number;
  is_air: false
}

export interface SimulationData {
  x_turret: number;
  y_turret: number;
  n_troops: number;
  troop_hp: number;
  troop_speed: number;
  turret_damage: number;
  turret_range: number;
  turret_firerate: number;
  turret_accuracy: number;
  cone_angle: number;
  troop_delay: number;
  troop_events: TroopEvent[];
  turret_events: TurretEvent[];
  troops_at_end: number;
}

export interface SimulationDataGeneralized {
  turret_info: TurretInfo[];
  troop_info: TroopInfo[];
  troops_at_end: Dict<any>;
  buildings_data: Dict<any>;
  troop_events: TroopEvent[];
  turret_events: TurretEvent[];
  generative_building_event: [];
  city_events: [];
}

export interface PathPoint {
  x: number;
  y: number;
  angle: number;
}

export interface PathData {
  path_id: number;
  length: number;
  points: PathPoint[];
}

export interface HealthBarState {
  id: number;
  x: number;
  y: number;
  percentage: number;
  visible: boolean;
}

export interface TroopSprite extends Sprite {
  start_time?: number;
  attack_unit_id?: number;
  path_id?: number;
  t_pos?: number;
  hp?: number;
  max_hp?: number;
  healthBar?: Graphics;
}

export interface TurretSprite extends Sprite {
  turret_id?: number;
  defensive_building_id?: number;
  hp: number;
  max_hp: number;
  healthBar?: Graphics;
  rangeCircle?: Graphics;
}
