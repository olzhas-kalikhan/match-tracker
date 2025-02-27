import type { Match } from "@/api-requests/matches";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Card from "../ui/card";
import MatchScore from "./match-score";
import StatsSeparator from "./stats-separator";
import TeamDetails from "./team-details";
import TeamDisplay from "./team-display";

export default function MatchCard({ matchData }: { matchData: Match }) {
  return (
    <Card>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="rounded p-2">
            <div className="flex w-full justify-between">
              <TeamDisplay name={matchData.awayTeam.name} />
              <MatchScore
                status={matchData.status}
                homeScore={matchData.homeScore}
                awayScore={matchData.awayScore}
              />
              <TeamDisplay away name={matchData.awayTeam.name} />
            </div>
          </AccordionTrigger>

          <AccordionContent className="py-2 xl:flex xl:justify-between xl:gap-6">
            <TeamDetails teamData={matchData.homeTeam} />
            <StatsSeparator />
            <TeamDetails teamData={matchData.awayTeam} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
