"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { db } from "~/configs/db";

const formSchema = z.object({
  skill: z.string().min(2, {
    message: "Skill must be at least 2 characters.",
  }),
});

type SkillForm = z.infer<typeof formSchema>;

export function AddSkill() {
  const form = useForm<SkillForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skill: "",
    },
  });

  async function onSubmit({ skill }: SkillForm) {
    db.skills.add({ skill });
    form.reset();
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Skills</CardTitle>
        <CardDescription>Tell us what your best skills are</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="skill"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Input placeholder="React" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
