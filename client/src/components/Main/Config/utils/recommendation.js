// what is the structure of the preference data... That's the point...
function generateRecommendationsByPreference(stats, preferences) {
    const maxTopicsPerSubject = 4; // Pegged at 4 topics per subject

    let recommendations = [];

    preferences.forEach(preference => {
        const { subject, type } = preference;

        // Find the subject stats
        const subjectStats = stats.find(
            s => s.name.toLowerCase() === subject.toLowerCase()
        );

        if (!subjectStats) {
            console.warn(`Subject '${subject}' not found in stats.`);
            return;
        }

        let validTopics = [];

        // Analyze topics based on the specified type
        subjectStats.topics.forEach(topic => {
            // this is based on the last five exams as opposed to the overall performance. Nice one.
            // Makes sense.
            const avgScore = topic.oldScores && topic.oldScores.length
                ? topic.oldScores.reduce((sum, score) => sum + score, 0) / topic.oldScores.length
                : 0;

            if (type === "Fortify" && avgScore < 70 && topic.attempts !== 0) {
                validTopics.push(topic);
            } else if (type === "Boost" && avgScore > 70) {
                validTopics.push(topic);
            } else if (type === "Explore" && topic.attempts === 0) {
                validTopics.push(topic);
            }
        });

        // Shuffle valid topics to add randomness
        validTopics = shuffleArray(validTopics);

        // Limit topics to maxTopicsPerSubject
        const limitedTopics = validTopics.slice(0, Math.floor(Math.random() * maxTopicsPerSubject) + 1); // this +1 is to prevent zero...

        // Create recommendations for the selected subject
        recommendations = recommendations.concat(
            limitedTopics.map(topic => ({
                subject,
                topic: topic.name,
                progress: topic.progress,
                oldScore: topic.oldScore || 0,
                weight: topic.weight,
                attempts: topic.attempts,
                action: type === "Boost" ? "Start Practice" : type === "Fortify" ? "Revise Topic" : "Explore Topic",
                questions: generateQuestionCount(topic.progress), // Dynamically generated question count
                recommend: true,
            }))
        );
    });

    return shuffleArray(recommendations);
}

// Helper function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Helper function to generate random question counts
function generateQuestionCount(progress) {
    if (progress >= 80) {
        // High progress: 20–30 questions
        return Math.floor(Math.random() * (30 - 20 + 1)) + 20;
    } else if (progress >= 50) {
        // Medium progress: 30–45 questions
        return Math.floor(Math.random() * (45 - 30 + 1)) + 30;
    } else {
        // Low progress: 45–60 questions
        return Math.floor(Math.random() * (60 - 45 + 1)) + 45;
    }
}

export default generateRecommendationsByPreference