calculateNewPoint explanation

This function calculates a new score for a user after they take a test, based on their performance (newScore) and how they have performed in the past (oldScore), with several adjustments that reward improvement and penalize stagnation. Here's a breakdown of the process:

1. Scaling the Old Weight (scaledOldWeight):
The function starts by adjusting the oldWeight (which represents how much weight is given to the user's past performance). It uses a non-linear scaling approach to increase the weight gradually as the old score increases, but it caps it at 10 to prevent the weight from becoming too large.
This helps the system give more importance to the older scores, but in a controlled manner that doesn’t overshadow recent progress.
2. Dynamic Weight Based on Score Gap (dynamicNewWeight):
Dynamic weighting is applied to the newScore based on the gap (difference) between the oldScore and newScore.
If the newScore is below 30, it applies a larger weight (1.5), meaning low scores are weighted more heavily to boost improvement focus. For higher scores, the weight is determined using a formula that considers the gap in performance. The gap formula has a logarithmic effect, meaning bigger differences in scores increase the weight, but the effect plateaus at a certain point (as the gap gets larger).
3. Progression Bands (progressWeight):
ProgressWeight adjusts based on the oldScore:
If the old score is between 50 and 80, it gives 80% weight (a little less emphasis).
If the old score is above 80, it gives 60% weight (further reduces the impact), which encourages improving even when the user is already doing well.
4. Handling Attempts:
The algorithm caps the number of attempts at 25 (no matter how many times the user attempts the test, it won’t count beyond this).
Mastery Bonus: If the user attempts fewer than 5 tests, it rewards them with extra points. It gets higher rewards the fewer tests they take, showing that trying fewer tests with good performance is valued.
Diminishing Factor: If a user takes a lot of attempts (more than 10), the value of their improvement decreases (meaning the score will be less impacted by small gains after many attempts).
Stagnation Penalty: If a user doesn’t improve much (less than 5 points) after more than 15 attempts, they face a small penalty for stagnating.
5. Adjusting for Question Count:
If the user took fewer than 5 questions in their test, there is a small test penalty (lowering the score). This encourages users to attempt larger tests to show better mastery.
Larger tests (20+ questions) are rewarded with a bonus to encourage challenging themselves.
6. First Test Penalty (firstAttemptPenalty):
If it's the user's first test (i.e., attempts = 1), the score is penalized more if the new score is below 50 (showing that low scores on the first try are less significant).
If the user scores well on their first attempt (50 or above), the penalty is smaller, as a good first score reflects strong understanding.
7. Adjusting the Weight Based on Progress:
After calculating all the factors, the function adjusts the newWeight.
If the newScore is better than the oldScore, it increases the weight slightly (0.5).
If there's little to no improvement, it increases the weight just a bit (0.1), maintaining some progress while discouraging stagnation.
8. Final Score:
The final combined score is calculated using the old and new scores, adjusted by all the factors above.
The final score is capped at 100 to prevent overinflation.
The function returns an object with the newWeight and the final score, both rounded to two decimal places.
In Simple Terms:
The algorithm calculates a user’s new score by balancing their old score, new score, attempts, question count, and overall progress.
It rewards improvement, but also discourages over-relying on a small number of tests or small question sets.
It adjusts the weight of the user’s score based on how much they’ve improved, and penalizes stagnation to keep users motivated.
Users who perform consistently well are encouraged, and those who make more attempts are also rewarded, but there are caps to ensure that only meaningful progress is acknowledged.
This ensures a fair and dynamic scoring system that keeps users improving and challenges them to perform at their best.