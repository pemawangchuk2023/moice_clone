import mongoose, { Schema, Document } from "mongoose";

export interface IAnnouncement extends Document {
	title: string;
	description: string;
	announcement_path: string | null;
	image_path: string | null;
	views: number;
	created_at: Date;
	updated_at: Date;
}

const AnnouncementSchema: Schema = new Schema(
	{
		title: { type: String, required: true, trim: true },
		description: { type: String, required: true },
		announcement_path: { type: String, default: null },
		image_path: { type: String, default: null },
		views: { type: Number, default: 0, min: 0 },
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	}
);

AnnouncementSchema.index({ created_at: -1 });

export const AnnouncementModel =
	mongoose.models.Announcement ||
	mongoose.model<IAnnouncement>("Announcement", AnnouncementSchema);
