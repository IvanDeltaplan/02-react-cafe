import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

export interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  return (
    <div className={css.container}>
      <h2>Statistics</h2>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total votes: {totalVotes}</p>
      <p>Positive feedback: {positiveRate}%</p>
    </div>
  );
}
