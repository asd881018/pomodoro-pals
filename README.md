# PomodoroPals: Enhancing Study Habits through Innovation
<img width="1428" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/a5413508-4319-41aa-b1f2-3764039c74f6">
<img width="1437" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/856f38c9-ede4-4940-852a-2f0d04371569">
<img width="1416" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/4a43e226-075c-4607-842a-7255df63981b">
<img width="1427" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/df85dba4-87a0-446d-94de-ffb89629d52d">
<img width="1416" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/c0fa6631-ee3b-43c1-9447-1138ae396937">
<img width="1409" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/f37e3a72-bc73-42b8-b3b6-504eef7b392b">
<img width="1407" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/459f326d-0742-4165-936a-67112b226727">
<img width="1418" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/25833dc5-5c19-4a39-be0c-164364adfc33">
<img width="1429" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/97976db1-f241-4d39-ba86-54d4a1bee4e8">
<img width="1420" alt="image" src="https://github.com/asd881018/pomodoro-pals/assets/84098790/0956bd95-5cfa-47ed-94f5-36fadc1dd3c2">








![image](https://github.com/asd881018/pomodoro-pals/assets/84098790/0466eb09-01d3-4dc8-b129-bdbacc39f3ea)


## Project Overview

PomodoroPals is a dynamic study buddy app designed to help students enhance and track their study habits over time. With functionalities ranging from session tracking to user rewards, the app aims to keep users focused and motivated throughout their study sessions. Unique features include authentication for user tracking, rewards in the form of coins, and a space for session summaries and reminders, all within a customizable virtual room environment.

## System Design Choices

Our system leverages AWS technologies to ensure a responsive, scalable, and cost-efficient platform. We've utilized AWS Amplify with React for the frontend, ensuring rapid development and seamless AWS integration. The backend employs Amplify Studio with NextJS and AWS Lambda for a serverless architecture, while AWS CloudFront enhances user experience by reducing latency. Each choice reflects our commitment to user satisfaction and adherence to best practices and SLAs.

## Implementation Details

The PomodoroPals app is built on a stack of AWS services, including AWS Amplify for hosting, AWS Cognito for authentication, API Gateway for backend communication, AWS Lambda for serverless computing, DynamoDB for databases, and AWS CloudFront for content delivery. These components were selected for their ease of use, performance, and scalability to meet our app's requirements.

## Testing Methodology and Results

Our testing approach encompassed unit and manual testing to ensure functionality and system correctness. We used Amplify for deployment, AWS services for backend operations, and conducted thorough code reviews to identify potential bugs. The testing process validated the app's performance, from user registration to goal management and session analysis, demonstrating the system's robustness and alignment with user needs.

## Analysis of Results

The success of PomodoroPals lies in its comprehensive functionality and alignment with user requirements, supported by the strategic use of AWS services. The app not only facilitates improved study habits but also delivers a seamless experience through optimized performance and user-friendly features. Our testing confirmed the system's effectiveness and reliability, underscoring its potential to positively influence study behaviors and user engagement.



Timer Taken From: https://github.com/kens-visuals/pomodoro-app
# This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Table of contents

- [Prerequisites](#prerequisites)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Node.js version 18.17.0 or later. If you haven't, you can use Node Version Manager (nvm) to install it. If you don't have nvm installed, you can install it with the following command:

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    ```

    After installing nvm, close your terminal and open a new one. Verify that nvm is installed by running nvm --version. Then, install and use the required Node.js version by running:

    ```bash
    nvm install 18.17.0
    nvm use 18.17.0
    ```

* You have installed the necessary dependencies for the project. If not, you can install them with the following command:

    ```bash
    npm install --save next react react-dom
    ```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
