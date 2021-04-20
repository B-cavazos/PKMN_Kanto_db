type Pokemon = { //Pascal casing
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[]; //option: Array<string> 
  height: string;
  weight: string;
  candy: string;
  candy_count?: number; //? represents optional property
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[] | null; //option: Array<number> | null
  weaknesses: string[];
  prev_evolution?: Evolution[]; //option: {num:string, name: string}[] << an array of object with these types 
  next_evolution?: Evolution[]; //option: {num:string, name: string}[] << an array of object with these types 
}

//set type for the array of objects within 'next_evolution'
type Evolution = {
  num: string;
  name: string;
  img?:string;
}