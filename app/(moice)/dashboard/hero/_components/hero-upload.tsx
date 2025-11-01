"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardFooter } from "@/components/ui/card";
import { ImageIcon, UploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { createHeroBanner } from "@/backend/actions/hero.action";

const Editor = dynamic(() => import("@/components/editor/editor"), {
	ssr: false,
});

const HeroUpload = () => {
	const editorRef = useRef<MDXEditorMethods>(null);
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [previewImage, setPreviewImage] = useState<string | null>(null);
	const [editorValue, setEditorValue] = useState("");

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setPreviewImage(e.target?.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (formData: FormData) => {
		setIsSubmitting(true);
		try {
			formData.set("description", editorValue);

			const result = await createHeroBanner(formData);

			if (result.success) {
				router.push("/");
				router.refresh();
				setEditorValue("");
				setPreviewImage(null);
				const form = document.getElementById(
					"hero-upload-form"
				) as HTMLFormElement;
				form.reset();
			} else {
				alert(result.error || "Failed to create hero banner");
			}
		} catch (error) {
			console.error("Error uploading hero banner:", error);
			alert("An error occurred while uploading");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className='w-full h-full'>
			<div className='w-full'>
				<div className='w-full'>
					<CardContent>
						<div>
							<form
								id='hero-upload-form'
								onSubmit={async (e) => {
									e.preventDefault();
									const form = e.currentTarget;
									const formData = new FormData(form);
									await handleSubmit(formData);
								}}
							>
								<div className='space-y-2'>
									<Label
										htmlFor='title'
										className='text-sm font-medium text-green-500'
									>
										Title
									</Label>
									<Input
										id='title'
										name='title'
										placeholder='Enter hero banner title'
										required
										className='w-full text-foreground rounded-none border-2'
									/>
								</div>

								<div className='space-y-2 mt-2'>
									<Label
										htmlFor='description'
										className='text-sm font-medium text-green-500'
									>
										Description
									</Label>
									<div className='w-full'>
										<Editor
											editorRef={editorRef}
											value={editorValue}
											fieldChange={setEditorValue}
										/>
									</div>
								</div>

								{/* Image Upload */}
								<div className='space-y-2 mt-6'>
									<Label htmlFor='image' className='text-sm font-medium'>
										Hero Image
									</Label>
									<div className='border-2 border-dashed rounded-lg p-6 text-center border-gray-300 hover:border-blue-400 transition-colors h-48 flex items-center justify-center'>
										<Input
											id='image'
											type='file'
											name='image'
											accept='image/*'
											required
											className='hidden'
											onChange={handleImageChange}
										/>
										<label
											htmlFor='image'
											className='cursor-pointer w-full h-full'
										>
											{previewImage ? (
												<div className='relative w-full h-32'>
													<Image
														src={previewImage}
														alt='Preview'
														fill
														className='object-contain'
														unoptimized
													/>
												</div>
											) : (
												<div className='flex flex-col items-center justify-center space-y-2'>
													<ImageIcon className='h-8 w-8 text-foreground' />
													<div className='text-sm text-foreground'>
														Click to upload image
													</div>
													<span className='text-xs text-foreground'>
														JPG, PNG, GIF, etc.
													</span>
												</div>
											)}
										</label>
									</div>
								</div>

								<CardFooter className='px-0 pt-4 flex justify-end'>
									<Button
										type='submit'
										className='bg-blue-600 hover:bg-blue-700 text-white px-8 cursor-pointer rounded-none'
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<div className='flex items-center gap-2'>
												<div className='animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white'></div>
												<span>Uploading...</span>
											</div>
										) : (
											<div className='flex items-center gap-2'>
												<UploadIcon className='h-4 w-4' />
												<span>Upload</span>
											</div>
										)}
									</Button>
								</CardFooter>
							</form>
						</div>
					</CardContent>
				</div>
			</div>
		</main>
	);
};

export default HeroUpload;
