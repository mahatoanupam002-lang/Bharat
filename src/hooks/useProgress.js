import { useStoredSet, useLocalStorage } from "./useLocalStorage.js";

// Central place for everything we persist about a learner's journey.
export function useProgress() {
  const lessons = useStoredSet("soch.completedLessons");
  const [quizBest, setQuizBest] = useLocalStorage("soch.quizBest", 0);
  const [pledged, setPledged] = useLocalStorage("soch.pledged", false);
  return { lessons, quizBest, setQuizBest, pledged, setPledged };
}
