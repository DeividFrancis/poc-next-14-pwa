"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Skill, db } from "~/configs/db";

export default function Home() {
  const { register, handleSubmit, ...methods } = useForm<Skill>();
  const skills = useLiveQuery(() => {
    return db.skills.toArray();
  }, []);

  async function handleSubmitSkill({ skill }: Skill) {
    db.skills.add({ skill });
    methods.reset();
  }
  return (
    <main className="max-w-screen max-h-screen">
      <div className="max-w-lg mx-auto mt-8">
        <h1>Skills</h1>

        <ul>
          {skills?.map((s) => (
            <li key={s.skill}>{s.skill}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit(handleSubmitSkill)} className="flex gap-2">
          <input
            type="text"
            {...register("skill")}
            className="border rounded"
          />
          <button type="submit" className="bg-black rounded text-white px-2">
            Add
          </button>
        </form>
      </div>
    </main>
  );
}
