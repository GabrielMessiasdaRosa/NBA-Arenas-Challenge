import { InferGetStaticPropsType } from "next";
import { useQuery } from "react-query";
import getPlayersService from "../services/get-players-service";

export type useGetPlayersProps = {
  params: {
    page: number;
    per_page: number;
    search?: string;
  };
  pageProps: InferGetStaticPropsType<typeof getStaticProps>;
};

const useGetPlayers = ({ params, pageProps }: useGetPlayersProps) => {
  const { data, error, status } = useQuery(
    [`/players`, params],
    () => getStaticProps({ params }),
    {
      initialData: { props: pageProps },
    }
  );
  const players = data?.props?.players;
  const meta = data?.props?.meta;
  return {
    players,
    meta,
    error,
    pending: status === "loading",
  };
};

export async function getStaticProps({ params }) {
  const data = await getPlayersService({ params });
  const players = data.players;
  const meta = data.meta;
  return {
    props: {
      players,
      meta,
    },
  };
}

export default useGetPlayers;
