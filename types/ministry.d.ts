export interface UploadAnnouncement {
	id: number;
	title: string;
	description?: string | null;
	announcement_path: string | null;
	image_path: string | null;
	created_at: string;
	fileUrl: string;
	fileType: string;
	views: number;
}
