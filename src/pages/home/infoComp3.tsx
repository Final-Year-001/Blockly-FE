
function InfoComp3() {
  const youtubeLinks = [
    // To add videos you need to use EMBEDDED LINK not the normal link from browser. 
    // click share video and click EMBEDDED. then copy just the SOURCE URL and add it.
    "https://www.youtube.com/embed/oRy_YiIxRwk?si=2N-VOvTcjvmXtciG", 
    "https://www.youtube.com/embed/-__vMHhgoBE?si=sYWSCrMytLoEu_U_",
    "https://www.youtube.com/embed/v4hh5axE6kg?si=KuvT4_WhfHxAd6_p",
    "https://www.youtube.com/embed/quhSnpzB71s?si=nBOBTeLhfEUbBdXb",
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
