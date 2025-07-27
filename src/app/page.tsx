
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { UploadDialog } from "./_components/upload-dialoge";

async function Images() {

  const mockURL=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCph5q0vsqyNsppdPtB90s3T4ztacx0mF4jQ&s", 
    "https://www.coffeebean.com.ph/wp-content/uploads/2025/03/Website-Homepage-Banner-Popup_1000-x-750.jpg",
    "https://t30fj182qg.ufs.sh/f/9OyfkA6D2s4iDLdcPdiWcvaeNtqG0T7Q3d95AwBMIlZ28pnV",
    "https://t30fj182qg.ufs.sh/f/9OyfkA6D2s4iYQ0KVboU76Y8KQClrOmkI0Z2dJhxT3Fgn5Bi",
  ];
  const images = mockURL.map((url, index) => ({
    id: index + 1,
    url,
}));

  return(
    <div>
      <div className="flex justify-items-end p-4">
        <UploadDialog  />
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
      {images.map((image) => (
        <div key={image.id}>
          <div className="w-64 flex-col">
            <div className="aspect relative-video bg-zinc-900"> 
              <img src={image.url} alt={`Image ${image.id}`} className="w-full h-full rounded-lg object-contain object-top" />
            </div>
          </div>
          <div className="text-center">{image.id}</div>
        </div>
      ))}

      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above to continue.
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center text-2xl">
          Welcome back!

          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
