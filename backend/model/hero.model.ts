// backend/model/hero.model.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IHeroBanner extends Document {
	title: string;
	description: string;
	imageData: string;
	imageMimeType: string;
	createdAt: Date;
	updatedAt: Date;
}

const HeroBannerSchema = new Schema<IHeroBanner>(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		imageData: {
			type: String,
			required: true,
		},
		imageMimeType: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const HeroBanner =
	mongoose.models.HeroBanner ||
	mongoose.model<IHeroBanner>("HeroBanner", HeroBannerSchema);
