export default (request, response) => {
  switch (request.method) {
    case "GET": {
      return getTeams(request, response);
    }
    default:
      break;
  }
};

const getTeams = async (request, response) => {
  try {
    const params = new URLSearchParams(request.query as any);
    const teams = await fetch(
      `${process.env.NEXT_PUBLIC_BALLDONTLIE_API_URL}/teams?${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const teamsData = await teams.json();
    response.status(200).json(teamsData);
  } catch (error) {
    console.log(error);
  }
};
