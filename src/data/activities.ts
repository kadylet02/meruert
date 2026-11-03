export type ActivityCategory = 'speaking' | 'listening' | 'discussion' | 'writing'

export type Activity = {
  id: string
  title: string
  description: string
  category: ActivityCategory
  focus: 'Speaking' | 'Listening' | 'Discussion' | 'Writing'
  level: 'B1' | 'B2'
  duration: number
  icon: 'campus' | 'debate' | 'conversation' | 'career' | 'travel' | 'project'
  color: 'sage' | 'peach' | 'lavender' | 'blue' | 'yellow' | 'pink'
  scenario: string
  goal: string
  phrases: string[]
  prompts: string[]
  roles: { a: string; b: string }
  dialogue: { speaker: 'A' | 'B'; text: string }[]
  quiz: { question: string; options: string[]; answer: number }
}

export const activities: Activity[] = [
  {
    id: 'campus',
    title: 'Campus connections',
    description: 'Жаңа таныстықтан баста. Өзіңді таныстырып, кампуста ортақ қызығушылықтары бар дос тап.',
    category: 'speaking',
    focus: 'Speaking',
    level: 'B1',
    duration: 15,
    icon: 'campus',
    color: 'sage',
    scenario: 'It is your first week at university. You meet a new student at the campus café. Introduce yourself, discover two things you have in common, and arrange to meet again.',
    goal: 'Keep a conversation going with follow-up questions and agree on a time and place to meet.',
    phrases: ['What are you studying?', 'How are you finding university so far?', 'We have that in common!', 'Would you like to grab a coffee after class?'],
    prompts: ['What would you like a new classmate to know about you?', 'Which follow-up question could help you find a shared interest?', 'How will you confirm the details of your next meeting?'],
    roles: {
      a: 'Student A: You study languages and enjoy photography. You are free on Thursday afternoon. Find a common interest and suggest a meeting.',
      b: 'Student B: You study engineering and enjoy taking photos. You have a class until 3 p.m. on Thursday. Ask questions and agree on a plan.',
    },
    dialogue: [
      { speaker: 'A', text: 'Hi, I’m Dana. Is this your first week here too?' },
      { speaker: 'B', text: 'Yes! I’m Alex. I study engineering. What about you?' },
      { speaker: 'A', text: 'I study languages. I’m also into photography. Would you like to explore the campus on Thursday?' },
      { speaker: 'B', text: 'I love photography too! My class finishes at three. Let’s meet at the café at half past three.' },
    ],
    quiz: { question: 'When and where do the students agree to meet?', options: ['At the café on Thursday at 3:30 p.m.', 'At the library on Friday at 3 p.m.', 'At the café on Thursday before class.'], answer: 0 },
  },
  {
    id: 'debate',
    title: 'The big debate',
    description: 'Өз ойыңды дәлелмен жеткіз. Онлайн және аудиториялық оқудың артықшылықтарын талқыла.',
    category: 'discussion',
    focus: 'Discussion',
    level: 'B2',
    duration: 20,
    icon: 'debate',
    color: 'peach',
    scenario: 'Your university is considering replacing one day of in-person classes with online lessons. Discuss the proposal with a partner and agree on a recommendation for the student council.',
    goal: 'Support your opinion with an example, respond respectfully to a different view, and reach a shared decision.',
    phrases: ['From my perspective…', 'I see your point, but…', 'Could you give an example?', 'Perhaps we could find a compromise.'],
    prompts: ['How might online classes affect students with a long commute?', 'Which activities work better when everyone is in the same room?', 'What compromise would meet both students’ needs?'],
    roles: {
      a: 'Student A: You support one online day because you travel a long distance. Explain the benefit, but listen to concerns about interaction.',
      b: 'Student B: You value classroom discussion and practical work. Ask for evidence and help design a balanced recommendation.',
    },
    dialogue: [
      { speaker: 'A', text: 'I think one online day would help students like me. My commute takes two hours.' },
      { speaker: 'B', text: 'I see your point, but group discussions are easier in person. How could we keep that interaction?' },
      { speaker: 'A', text: 'We could keep seminars on campus and move recorded lectures online.' },
      { speaker: 'B', text: 'That sounds like a fair compromise. Let’s recommend online lectures and in-person seminars.' },
    ],
    quiz: { question: 'What recommendation do the students agree on?', options: ['Move every class online.', 'Keep lectures and seminars on campus.', 'Offer lectures online and seminars in person.'], answer: 2 },
  },
  {
    id: 'everyday',
    title: 'Everyday conversations',
    description: 'Тыңда, негізгі ойды анықта және жауап бер. Күнделікті жағдайларда сенімді сөйлес.',
    category: 'listening',
    focus: 'Listening',
    level: 'B1',
    duration: 10,
    icon: 'conversation',
    color: 'lavender',
    scenario: 'You and a classmate need to change a study meeting because the library is closing early. Listen to the conversation, identify the new plan, then suggest another option of your own.',
    goal: 'Understand a change of plan, ask for clarification, and confirm the important details.',
    phrases: ['Sorry, could you say that again?', 'Did you mean…?', 'How about meeting at…?', 'So, just to confirm…'],
    prompts: ['Which detail in the original plan has changed?', 'What question would you ask if you missed the new location?', 'How could you suggest a different time politely?'],
    roles: {
      a: 'Student A: The library closes at 4 p.m. today. You need to suggest a new place and confirm a 5 p.m. meeting.',
      b: 'Student B: You finish class at 4:30 p.m. Ask where the new meeting place is, then repeat the final arrangement.',
    },
    dialogue: [
      { speaker: 'A', text: 'The library closes at four today. Shall we study at the student centre instead?' },
      { speaker: 'B', text: 'Sure. Did you mean the quiet room on the second floor?' },
      { speaker: 'A', text: 'Exactly. I’ll bring my notes. Is five o’clock still good for you?' },
      { speaker: 'B', text: 'Yes. So, just to confirm: five o’clock in the quiet room at the student centre.' },
    ],
    quiz: { question: 'What is the students’ final plan?', options: ['Meet at the library at 4 p.m.', 'Meet in the student centre’s quiet room at 5 p.m.', 'Meet in the classroom at 4:30 p.m.'], answer: 1 },
  },
  {
    id: 'career',
    title: 'Your next chapter',
    description: 'Жұмыс сұхбатында тәжірибең мен мақсатыңды айт. Нақты мысалдармен жауап беруге жаттық.',
    category: 'speaking',
    focus: 'Speaking',
    level: 'B2',
    duration: 15,
    icon: 'career',
    color: 'blue',
    scenario: 'You are applying for a student internship at an international organisation. Practise a short interview, give an example of teamwork, and ask a question about the role.',
    goal: 'Explain a relevant skill through a concrete example and ask for information that helps you understand the internship.',
    phrases: ['One of my strengths is…', 'For example, during a group project…', 'What I learned from that experience was…', 'Could you tell me more about the team?'],
    prompts: ['Which university experience shows a useful workplace skill?', 'What did you do personally, and what was the result?', 'What would you like to know before accepting an internship?'],
    roles: {
      a: 'Applicant: You helped your class organise a campus event. Explain your contribution and ask how interns receive feedback.',
      b: 'Interviewer: Ask the applicant about teamwork and a challenge they solved. Explain that interns meet a mentor every week.',
    },
    dialogue: [
      { speaker: 'B', text: 'Could you describe a time you worked successfully in a team?' },
      { speaker: 'A', text: 'During a campus event, I coordinated five volunteers. We divided the tasks and welcomed over fifty students.' },
      { speaker: 'B', text: 'That is a useful example. Do you have any questions about the internship?' },
      { speaker: 'A', text: 'Yes. How do interns receive feedback on their work?' },
    ],
    quiz: { question: 'How does the applicant demonstrate teamwork?', options: ['By describing how they coordinated volunteers at a campus event.', 'By listing every subject they study.', 'By saying they prefer working alone.'], answer: 0 },
  },
  {
    id: 'travel',
    title: 'Beyond the campus',
    description: 'Саяхатты бірге жоспарла. Бюджетті талқылап, ұсыныс жаса және ортақ шешімге кел.',
    category: 'discussion',
    focus: 'Discussion',
    level: 'B2',
    duration: 20,
    icon: 'travel',
    color: 'yellow',
    scenario: 'You and a fellow exchange student have one free Saturday and a shared budget of £60. Plan a day trip together. Decide on transport, one activity, and a place to eat without going over budget.',
    goal: 'Compare options, explain preferences, and negotiate a realistic shared plan.',
    phrases: ['What if we…?', 'I’d rather… because…', 'That would leave us enough for…', 'Shall we agree on…?'],
    prompts: ['Which part of a day trip matters most to you?', 'How can you respond when your partner prefers a different activity?', 'Does your final plan fit the budget and both students’ interests?'],
    roles: {
      a: 'Student A: You enjoy museums. Two return train tickets cost £24, and museum entry is free. Suggest a plan within the shared budget.',
      b: 'Student B: You prefer being outdoors. A park is near the museum. Lunch for two costs £20. Help include both interests.',
    },
    dialogue: [
      { speaker: 'A', text: 'What if we take the train and visit the free museum? Two return tickets cost twenty-four pounds.' },
      { speaker: 'B', text: 'I’d also like some time outdoors. Could we walk in the park nearby afterwards?' },
      { speaker: 'A', text: 'Great idea. Lunch for two is twenty pounds, so the total would be forty-four.' },
      { speaker: 'B', text: 'That leaves sixteen pounds. Let’s agree on the museum, the park, and lunch.' },
    ],
    quiz: { question: 'How much of the shared budget is left after transport and lunch?', options: ['£44', '£20', '£16'], answer: 2 },
  },
  {
    id: 'project',
    title: 'Better together',
    description: 'Топтық жобаға нақты ұсыныс жаз. Міндеттерді бөлісіп, серіктесіңді пікір айтуға шақыр.',
    category: 'writing',
    focus: 'Writing',
    level: 'B2',
    duration: 15,
    icon: 'project',
    color: 'pink',
    scenario: 'Your team is preparing a presentation on a more sustainable campus. Write an 80–120 word message proposing a topic, sharing responsibilities, and asking a teammate for their opinion. Then exchange feedback.',
    goal: 'Write a clear message for a real audience that invites a reply and leads to a shared project plan.',
    phrases: ['I’d like to suggest…', 'Would you be happy to…?', 'I can take responsibility for…', 'Let me know what you think.'],
    prompts: ['What change could make your campus more sustainable?', 'Are your proposed responsibilities clear and balanced?', 'Which question in your message will help your teammate respond?'],
    roles: {
      a: 'Project coordinator: Propose a presentation about reducing single-use plastic. Offer to research the problem and invite your teammate to suggest solutions.',
      b: 'Teammate: Reply with one idea, confirm what you can contribute, and ask when the team should share its first draft.',
    },
    dialogue: [
      { speaker: 'A', text: 'Hi! I’d like to suggest reducing single-use plastic as our presentation topic. I can research the problem. Would you be happy to explore possible solutions?' },
      { speaker: 'B', text: 'That sounds interesting. I could compare reusable cup schemes at other universities. When do we need a first draft?' },
      { speaker: 'A', text: 'How about sharing our notes by Wednesday? Then we could build the slides together on Friday.' },
      { speaker: 'B', text: 'Wednesday works for me. I’ll share two examples and suggest a practical solution for our campus.' },
    ],
    quiz: { question: 'What will the teammate contribute by Wednesday?', options: ['A completed presentation with no input from the group.', 'Two examples and a practical solution for reducing plastic.', 'A new topic about international travel.'], answer: 1 },
  },
]
