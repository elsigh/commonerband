import OGImage from "@/components/OGImage";

const song = {
  title: "Tell Mr. Massey",
  img: "TellMrMassey.jpg",
  color: "#f8f5f2",
  size: {
    width: 1200,
    height: 630,
  },
};

export const alt = `${song.title} by Commoner`;

export const size = song.size;

export const contentType = "image/png";

export default function OpenGraphImage() {
  return OGImage({ song });
}
