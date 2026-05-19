export default function Robotics() {
  const topics = [
    {
      title: 'Autonomous Navigation',
      description:
        'Algorithms that let robots perceive their environment and move through it safely without human input.',
    },
    {
      title: 'Computer Vision',
      description:
        'Giving robots the ability to interpret images and video to recognise objects, people and obstacles.',
    },
    {
      title: 'Robotic Manipulation',
      description:
        'Designing arms and grippers that can grasp, move and assemble objects with precision.',
    },
    {
      title: 'Human-Robot Interaction',
      description:
        'Making robots that collaborate naturally and safely with people in shared spaces.',
    },
  ]

  return (
    <section className="page">
      <h1>Robotics</h1>
      <p className="lead">
        A quick tour of the robotics topics highlighted in this demo.
      </p>

      <div className="topics">
        {topics.map((t) => (
          <article key={t.title} className="topic">
            <h2>{t.title}</h2>
            <p>{t.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
