export default (request, response) => {
  switch (request.method) {
    case "GET": {
      return getPlayer(request, response);
    }
    default:
      break;
  }
};

const getPlayer = async (request, response) => {
  try {
    const { id } = request.query;
    const player = await fetch(
      `${process.env.NEXT_PUBLIC_BALLDONTLIE_API_URL}/players/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const playerData = await player.json();
    response.status(200).json(playerData);
  } catch (error) {
    console.log(error);
  }
};
