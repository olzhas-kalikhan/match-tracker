import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export type Player = {
  kills: number;
  username: string;
};

export type Team = {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
};

export type Match = {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: "Finished" | "Scheduled" | "Ongoing";
  time: string;
  title: string;
};

type GetMatchesResponse = {
  data: {
    matches: Match[];
  };
  ok: true;
};

const getMatches = async () => {
  const response = await axios.get<GetMatchesResponse>(
    "https://app.ftoyd.com/fronttemp-service/fronttemp",
  );
  return response.data.data.matches;
};

const useReactQuerySubscription = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    const websocket = new WebSocket("wss://app.ftoyd.com/fronttemp-service/ws");
    websocket.onopen = () => {
      console.log("connected");
    };
    websocket.onmessage = (event) => {
      const { data }: { data: Match[] } = JSON.parse(event.data);
      queryClient.setQueryData(["matches"], data);
    };

    return () => {
      websocket.close();
    };
  }, [queryClient]);
};
const matchesService = { getMatches, useReactQuerySubscription };
export default matchesService;
