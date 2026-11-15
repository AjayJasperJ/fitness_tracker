export const dateKey=(d:Date)=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
export const isRestDay=(d:Date)=>d.getDay()===0;
export const canMarkAttendance=(d:Date,loaded:boolean,busy:boolean)=>loaded&&!busy&&!isRestDay(d);
export const attendanceDays=(dates:string[],days:number,now:Date)=>{const present=new Set(dates);let count=0;for(let i=0;i<days;i++){const day=new Date(now.getFullYear(),now.getMonth(),now.getDate()-i,12);if(present.has(dateKey(day)))count++}return count};
export const workoutVolume=(sets:{kg:number;reps:number}[])=>sets.reduce((total,s)=>total+s.kg*s.reps,0);
export const validSets=(sets:{kg:number;reps:number}[])=>sets.length>0&&sets.every(s=>Number.isFinite(s.kg)&&s.kg>=0&&s.kg<=1000&&Number.isInteger(s.reps)&&s.reps>=1&&s.reps<=200);
