"use client";

import { useState } from "react";

// ── Real Unsplash images per category ──────────────────────────────────────
const categoryImages: Record<string, string[]> = {
  nature: [
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  ],
  culture: [
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    "https://images.unsplash.com/photo-1561361058-c24e02c0dd37?w=800&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  ],
  wildlife: [
    "https://images.unsplash.com/photo-1504173010664-32509107de76?w=800&q=80",
    "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
    "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80",
    "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80",
  ],
  beach: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
    "https://images.unsplash.com/photo-1520454974749-a795130ec38b?w=800&q=80",
  ],
  heritage: [
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
    "https://images.unsplash.com/photo-1590170342095-0fef8f882ead?w=800&q=80",
    "https://images.unsplash.com/photo-1585264550248-1778be3b6368?w=800&q=80",
    "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=800&q=80",
  ],
};

const galleryItems = [
  { id: 1,  category: "nature",   alt: "Misty Forest Mountains",      src: categoryImages.nature[0] },
  { id: 2,  category: "nature",   alt: "Lush Green Valley",           src: categoryImages.nature[1] },
  { id: 3,  category: "nature",   alt: "Sunlit Forest Path",          src: categoryImages.nature[2] },
  { id: 4,  category: "nature",   alt: "Mountain Peaks at Dawn",      src: categoryImages.nature[3] },
  { id: 5,  category: "culture",  alt: "Traditional Temple Ceremony", src: categoryImages.culture[0] },
  { id: 6,  category: "culture",  alt: "Local Market Life",           src: categoryImages.culture[1] },
  { id: 7,  category: "culture",  alt: "Ancient Rituals",             src: categoryImages.culture[2] },
  { id: 8,  category: "culture",  alt: "Colourful Festival",          src: categoryImages.culture[3] },
  { id: 9,  category: "wildlife", alt: "Elephant in the Wild",        src: categoryImages.wildlife[0] },
  { id: 10, category: "wildlife", alt: "Exotic Tropical Bird",        src: categoryImages.wildlife[1] },
  { id: 11, category: "wildlife", alt: "Leopard in Yala",             src: categoryImages.wildlife[2] },
  { id: 12, category: "wildlife", alt: "Wildlife Safari Sunset",      src: categoryImages.wildlife[3] },
  { id: 13, category: "beach",    alt: "Golden Sandy Beach",          src: categoryImages.beach[0] },
  { id: 14, category: "beach",    alt: "Turquoise Coastal Waters",    src: categoryImages.beach[1] },
  { id: 15, category: "beach",    alt: "Sunset Over the Ocean",       src: categoryImages.beach[2] },
  { id: 16, category: "beach",    alt: "Tropical Palm Beach",         src: categoryImages.beach[3] },
  { id: 17, category: "heritage", alt: "Ancient Temple Ruins",        src: categoryImages.heritage[0] },
  { id: 18, category: "heritage", alt: "Historic Stupa",              src: categoryImages.heritage[1] },
  { id: 19, category: "heritage", alt: "Colonial Architecture",       src: categoryImages.heritage[2] },
  { id: 20, category: "heritage", alt: "Sacred Rock Fortress",        src: categoryImages.heritage[3] },
];

const categories = [
  { value: "all",      label: "All" },
  { value: "nature",   label: "🌿 Nature" },
  { value: "culture",  label: "🏮 Culture" },
  { value: "wildlife", label: "🐘 Wildlife" },
  { value: "beach",    label: "🏖️ Beach" },
  { value: "heritage", label: "🏛️ Heritage" },
];

const heights = [260, 340, 200, 300, 260, 220, 360, 240, 280, 200, 320, 260, 240, 300, 200, 340, 260, 220, 300, 280];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const filteredImages =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((img) => img.category === activeCategory);

  const selectedImageData =
    selectedImage !== null
      ? galleryItems.find((img) => img.id === selectedImage)
      : null;

  const handleImgError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const idx = filteredImages.findIndex((img) => img.id === selectedImage);
    setSelectedImage(filteredImages[(idx - 1 + filteredImages.length) % filteredImages.length].id);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const idx = filteredImages.findIndex((img) => img.id === selectedImage);
    setSelectedImage(filteredImages[(idx + 1) % filteredImages.length].id);
  };

  return (
    <>
      {/* ── HERO ── bright tropical beach / ocean waves */}
      <section
        className="relative py-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1800&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Ocean-blue to teal gradient overlay — keeps text legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(7,89,133,0.72) 0%, rgba(14,116,144,0.55) 50%, rgba(0,0,0,0.40) 100%)",
          }}
        />

        {/* Bottom wave into white */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg
            viewBox="0 0 1440 64"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: "52px" }}
          >
            <path d="M0,32 C480,80 960,0 1440,32 L1440,64 L0,64 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 container-custom mx-auto px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 backdrop-blur-sm">
            <svg className="h-4 w-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
              Photo Gallery
            </span>
          </div>

          <h1 className="mb-5 font-heading text-5xl font-bold text-white sm:text-6xl drop-shadow-xl">
            Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-white/90 text-lg leading-relaxed drop-shadow">
            A visual journey through the breathtaking landscapes, rich culture,
            and incredible wildlife of Sri Lanka.
          </p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-padding">
        <div className="container-custom mx-auto">

          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-primary-600 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Image Grid */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                onClick={() => setSelectedImage(image.id)}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ height: `${heights[index % heights.length]}px` }}
                >
                  {!imgErrors[image.id] ? (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImgError(image.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`h-full w-full flex items-center justify-center bg-gradient-to-br ${
                        image.category === "nature"   ? "from-green-200 to-green-400"   :
                        image.category === "culture"  ? "from-amber-200 to-amber-400"   :
                        image.category === "wildlife" ? "from-emerald-200 to-emerald-400" :
                        image.category === "beach"    ? "from-blue-200 to-cyan-400"     :
                                                        "from-orange-200 to-orange-400"
                      }`}
                    >
                      <p className="text-sm font-medium text-white/80 text-center px-4">{image.alt}</p>
                    </div>
                  )}

                  {/* Hover caption overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-sm font-semibold text-white leading-snug">{image.alt}</p>
                    <span className="mt-1 inline-block w-fit rounded-full bg-white/20 px-2 py-0.5 text-xs capitalize text-white/90 backdrop-blur-sm">
                      {image.category}
                    </span>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute right-3 top-3 rounded-full bg-black/40 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {selectedImageData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25 backdrop-blur-sm"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25 backdrop-blur-sm"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25 backdrop-blur-sm"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-5xl w-full overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!imgErrors[selectedImageData.id] ? (
              <img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="h-full max-h-[85vh] w-full object-contain"
                onError={() => handleImgError(selectedImageData.id)}
              />
            ) : (
              <div
                className={`flex h-96 w-full items-center justify-center bg-gradient-to-br sm:h-[500px] ${
                  selectedImageData.category === "nature"   ? "from-green-300 to-green-500"   :
                  selectedImageData.category === "culture"  ? "from-amber-300 to-amber-500"   :
                  selectedImageData.category === "wildlife" ? "from-emerald-300 to-emerald-500" :
                  selectedImageData.category === "beach"    ? "from-blue-300 to-cyan-500"     :
                                                              "from-orange-300 to-orange-500"
                }`}
              >
                <p className="text-lg font-medium text-white px-8 text-center">{selectedImageData.alt}</p>
              </div>
            )}

            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
              <p className="text-base font-semibold text-white">{selectedImageData.alt}</p>
              <span className="mt-1 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs capitalize text-white/90 backdrop-blur-sm">
                {selectedImageData.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}