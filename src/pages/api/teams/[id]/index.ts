export default (request, response) => {
  switch (request.method) {
    case "GET": {
      return getTeam(request, response);
    }
    default:
      break;
  }
};

const getTeam = async (request, response) => {
  try {
    const { id } = request.query;
    const team = await fetch(
      `${process.env.NEXT_PUBLIC_BALLDONTLIE_API_URL}/teams/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const teamData = await team.json();
    response.status(200).json(teamData);
  } catch (error) {
    console.log(error);
  }
};
