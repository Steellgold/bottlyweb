import { redirect } from "@sveltejs/kit";

export const GET = (): Response => {
  throw redirect(302, "https://discord.gg/tFUJHr2htA");
};