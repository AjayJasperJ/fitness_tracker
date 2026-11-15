import {describe,it,expect} from 'vitest';
import {attendanceDays,canMarkAttendance,dateKey,isRestDay,validSets,workoutVolume} from '../src/fitnessLogic';
describe('attendance',()=>{
it('disables Sunday attendance even if data loaded',()=>{expect(isRestDay(new Date(2026,10,15))).toBe(true);expect(canMarkAttendance(new Date(2026,10,15),true,false)).toBe(false)});
it('allows a training day only after loading and while idle',()=>{const monday=new Date(2026,10,16);expect(canMarkAttendance(monday,true,false)).toBe(true);expect(canMarkAttendance(monday,false,false)).toBe(false);expect(canMarkAttendance(monday,true,true)).toBe(false)});
it('handles empty attendance and repeated dates without double counting',()=>{const now=new Date(2026,10,16);expect(attendanceDays([],28,now)).toBe(0);expect(attendanceDays(['2026-11-16','2026-11-16','2026-11-15'],28,now)).toBe(2)});
it('uses local date not UTC and handles month rollover',()=>{expect(dateKey(new Date(2026,0,1))).toBe('2026-01-01');expect(attendanceDays(['2026-10-31'],28,new Date(2026,10,1))).toBe(1)});
});
describe('workout logging',()=>{
it('accepts a normal workout and bodyweight sets',()=>{expect(validSets([{kg:10,reps:12},{kg:0,reps:10}])).toBe(true);expect(workoutVolume([{kg:10,reps:12},{kg:5,reps:10}])).toBe(170)});
it('rejects empty and invalid sets',()=>{expect(validSets([])).toBe(false);expect(validSets([{kg:-1,reps:10}])).toBe(false);expect(validSets([{kg:10,reps:0}])).toBe(false);expect(validSets([{kg:10,reps:2.5}])).toBe(false);expect(validSets([{kg:Infinity,reps:10}])).toBe(false)});
});
