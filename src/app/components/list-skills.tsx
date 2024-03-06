"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { db } from "~/configs/db";

export function ListSkills() {
  const skills = useLiveQuery(() => {
    return db.skills.toArray();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex gap-2">
          {skills?.map((s) => (
            <Badge key={s.skill}>{s.skill}</Badge>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
