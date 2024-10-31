export interface TroopEvent {
  timestamp: number;
  troop_id: number;
  event_type: 'damage' | 'death' | 'start' | 'reach_target';
  data: any;
}

export interface TurretEvent {
  timestamp: number;
  event_type: 'rotate' | 'fire';
  angle?: number;
  target_troop_id?: number;
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
