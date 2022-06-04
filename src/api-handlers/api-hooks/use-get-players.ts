import { InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import getPlayersService from "../services/get-players-service";

export type useGetPlayersProps = {
  params: {
    page: number;
    per_page: number;
    search?: string;
  };
  players: InferGetServerSidePropsType<typeof getStaticProps>;
};

const useGetPlayers = ({ params, players }: useGetPlayersProps) => {
  const { data, error, status } = useQuery([`/players`, params], () =>
    getPlayersService({ params })
  );
  console.log("pageProps", players);
  return {
    data,
    error,
    pending: status === "loading",
  };
};
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const players = await getPlayersService({ params });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      players,
    },
  };
}
export default useGetPlayers;
