import { pgTable, serial, text, timestamp, varchar, boolean, jsonb, pgEnum, integer } from "drizzle-orm/pg-core";

// İstifadəçi rolları
export const userRoleEnum = pgEnum("user_role", ["developer", "tester", "admin"]);

// İstifadəçilər
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }),
  googleId: varchar("google_id", { length: 255 }).unique(),
  avatar: varchar("avatar", { length: 500 }),
  role: userRoleEnum("role").default("tester"),
  bio: text("bio"),
  title: varchar("title", { length: 255 }),
  phone: varchar("phone", { length: 255 }),
  location: varchar("location", { length: 255 }),
  website: varchar("website", { length: 255 }),
  github: varchar("github", { length: 255 }),
  linkedin: varchar("linkedin", { length: 255 }),
  instagram: varchar("instagram", { length: 255 }),
  facebook: varchar("facebook", { length: 255 }),
  twitter: varchar("twitter", { length: 255 }),
  skills: jsonb("skills").default([]),
  experience: varchar("experience", { length: 50 }),
  hourlyRate: varchar("hourly_rate", { length: 50 }),
  isVerified: boolean("is_verified").default(false),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// CV Şablonları
export const cvTemplates = pgTable("cv_templates", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  thumbnail: varchar("thumbnail", { length: 500 }),
  previewUrl: varchar("preview_url", { length: 500 }),
  category: varchar("category", { length: 100 }),
  price: varchar("price", { length: 50 }).default("free"),
  downloads: integer("downloads").default(0),
  rating: varchar("rating", { length: 10 }).default("0"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// İstifadəçi CV-ləri
export const userCvs = pgTable("user_cvs", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => users.id),
  templateId: serial("template_id").references(() => cvTemplates.id),
  title: varchar("title", { length: 255 }).notNull(),
  data: jsonb("data").notNull(),
  isPublic: boolean("is_public").default(false),
  views: integer("views").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Portfolio-lar
export const portfolios = pgTable("portfolios", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => users.id),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  imageUrl: varchar("image_url", { length: 500 }),
  projectUrl: varchar("project_url", { length: 500 }),
  githubUrl: varchar("github_url", { length: 500 }),
  category: varchar("category", { length: 100 }),
  tags: jsonb("tags").default([]),
  isFeatured: boolean("is_featured").default(false),
  views: integer("views").default(0),
  likes: integer("likes").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Elanlar/Postlar
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => users.id),
  title: varchar("title", { length: 500 }).notNull(),
  description: text("description").notNull(),
  type: varchar("type", { length: 50 }).default("job"), // job, project, tester, freelance
  category: varchar("category", { length: 100 }),
  budget: varchar("budget", { length: 100 }),
  deadline: timestamp("deadline"),
  skills: jsonb("skills").default([]),
  location: varchar("location", { length: 255 }),
  remote: boolean("remote").default(true),
  status: varchar("status", { length: 50 }).default("active"), // active, in_progress, completed, closed
  views: integer("views").default(0),
  applications: integer("applications").default(0),
  isFeatured: boolean("is_featured").default(false),
  isUrgent: boolean("is_urgent").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Başvurular
export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  postId: serial("post_id").references(() => posts.id),
  userId: serial("user_id").references(() => users.id),
  coverLetter: text("cover_letter"),
  cvId: serial("cv_id").references(() => userCvs.id),
  price: varchar("price", { length: 100 }),
  timeline: varchar("timeline", { length: 100 }),
  status: varchar("status", { length: 50 }).default("pending"), // pending, accepted, rejected
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Mesajlar
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  senderId: serial("sender_id").references(() => users.id),
  receiverId: serial("receiver_id").references(() => users.id),
  postId: serial("post_id").references(() => posts.id),
  content: text("content").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Konversasiyalar
export const conversations = pgTable("conversations", {
  id: serial("id").primaryKey(),
  userId1: serial("user_id_1").references(() => users.id),
  userId2: serial("user_id_2").references(() => users.id),
  lastMessage: text("last_message"),
  lastMessageAt: timestamp("last_message_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Bildirişlər
export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => users.id),
  type: varchar("type", { length: 50 }), // application, message, post, system
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content"),
  link: varchar("link", { length: 500 }),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Rəylər
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  reviewerId: serial("reviewer_id").references(() => users.id),
  revieweeId: serial("reviewee_id").references(() => users.id),
  postId: serial("post_id").references(() => posts.id),
  rating: serial("rating").notNull(),
  comment: text("comment"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Xarici elanlar (API inteqrasiyası üçün)
export const externalJobs = pgTable("external_jobs", {
  id: serial("id").primaryKey(),
  source: varchar("source", { length: 100 }).notNull(), // upwork, freelancer, etc
  externalId: varchar("external_id", { length: 255 }),
  title: varchar("title", { length: 500 }).notNull(),
  description: text("description"),
  url: varchar("url", { length: 500 }).notNull(),
  budget: varchar("budget", { length: 100 }),
  skills: jsonb("skills").default([]),
  postedAt: timestamp("posted_at"),
  sourceData: jsonb("source_data"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
