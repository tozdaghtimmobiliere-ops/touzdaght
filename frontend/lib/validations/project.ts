import { z } from "zod"

export const ProjectSchema = z.object({
  name_ar: z.string().min(3, "Arabic name is required"),
  name_fr: z.string().min(3, "French name is required"),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  status: z.enum(["active", "pending", "completed"]),
  city: z.string().min(2),
  images: z.array(z.string().url()).min(1, "At least one image is required"),
  metadata: z.any().optional(),
})

export type ProjectInput = z.infer<typeof ProjectSchema>
