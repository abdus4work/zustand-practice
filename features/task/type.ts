import { StaticImageData } from "next/image";
import { ComponentType } from "react";

export type Task = {
  id: number;
  title: string;
  slug: string;
  description: string;
  previewImage: string | StaticImageData;
  component?: ComponentType;
  explanation?: TaskExplanation;
};

export type TaskExplanation ={
  description: string;
  features: string[];
  concept: string[]
  code?: string;
}