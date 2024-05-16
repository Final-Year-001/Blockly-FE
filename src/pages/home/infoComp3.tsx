
function InfoComp3() {
  const youtubeLinks = [
    // To add videos you need to use EMBEDDED LINK not the normal link from browser. 
    // click share video and click EMBEDDED. then copy just the SOURCE URL and add it.
    "https://www.youtube.com/embed/1GY3wrCKZFw?si=2Q4Ut8pRKWxfq4cm",
    "https://www.youtube.com/embed/1GY3wrCKZFw?si=2Q4Ut8pRKWxfq4cm",
    "https://www.youtube.com/embed/buapDLD1YSA?si=48R5XWeku0y9o9kN",
    "https://www.youtube.com/embed/FRnKY-5TqOM?si=HnjgCHTn7SeDOdya",
  ];

  const des = "If you're feeling lost, don't worry, we've got you covered with our wonderful YouTube series. We'll help you to get started. Head over to our YouTube channel for detailed explanations."

  return (
    <div className="w-full mx-auto container">
      <div className="text-3xl flex justify-center mb-6">Check us out on Youtube! 🎥</div>
      <div className="text-xl flex justify-center mb-20">{des}</div>
      <div className="flex flex-wrap justify-center mt-4">
        {youtubeLinks.map((link) => (
          <div key={link} className="m-2">
            {/* Embed the YouTube video using an iframe */}
            <iframe
              width="300"
              height="200"
              src={link}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
    );
}

export default InfoComp3;
