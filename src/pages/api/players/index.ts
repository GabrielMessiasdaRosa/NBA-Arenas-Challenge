export default (request, response) => {
  switch (request.method) {
    case "GET": {
      return getPlayers(request, response);
    }

    default:
      break;
  }
};

const getPlayers = async (request, response) => {
  try {
    const params = new URLSearchParams(request.query as any);
    const players = await fetch(
      `${process.env.NEXT_PUBLIC_BALLDONTLIE_API_URL}/players?${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const playersData = await players.json();
    response.status(200).json(playersData);
  } catch (error) {
    console.log(error);
  }
};
