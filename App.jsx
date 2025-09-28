// pages/index.js (for Next.js) OR App.jsx in standard React
import React, { useState } from "react";

export default function App() {
  const [currentChapter, setCurrentChapter] = useState(0);

  // We'll use just 3 sample chapters to start (add more later)
  const chapters = [
    {
      title: "Chapter 98: The Redemption of the Village",
      content: `
After the trial, Fenwa didn’t return to Lagos. He went straight to Ìsẹ̀lú.

The village welcomed him with ululations, drumming, and dancing. The Oba declared a day of celebration.

But Fenwa had one mission.

He gathered the youth of the village in the square.
Fenwa:
“Young men and women, I was once like you—poor, forgotten, but full of dreams. Today, I announce the *Fenwa & Ṣadé Youth Empowerment Fund*.”

He unveiled a plaque:
“₦100 million to train 500 youths in tech, farming, fashion, and business. No bribes. No favoritism. Just opportunity.”

The youth cheered.

He turned to the elders.
Fenwa:
“And for our fathers and mothers, we will build a modern clinic with solar power, clean water, and free medicine.”

The elders wept.

Ṣadé stepped forward, holding a child’s hand.
Ṣadé:
“This is not just charity. This is legacy. And it starts with you.”

That night, the entire village feasted under the stars.

No more poverty.
No more shame.
Only pride.
And peace.
`
    },
    {
      title: "Chapter 99: The Birth of a Legacy",
      content: `
One year later, the village of Ìsẹ̀lú was transformed.

Solar panels powered homes. A new school stood tall with computers and books. The clinic served over 20 villages. Young people returned from the city to start businesses.

And in the center of it all stood a statue—not of Fenwa, but of **Fenwa and Ṣadé, hand in hand**, with the inscription:

> “They came not with pride, but with love.  
> Not with noise, but with service.  
> This is how legacies are built.”

Fenwa and Ṣadé stood before it on a quiet morning, holding each other.

Ṣadé:
“We did it, my love.”

Fenwa:
“No. *We* did it. You, me, and this village.”

She smiled, resting her head on his shoulder.

That afternoon, the Oba called them.
Oba:
“I have never seen such love. I declare today: Fenwa and Ṣadé are now *Oba ati Iya Ilu* — King and Queen of the Land.”

The drums rolled. The people chanted.

And as the sun set, Fenwa whispered:
Fenwa:
“This is not the end. It is only the beginning of our legacy.”
`
    },
    {
      title: "Chapter 100: Forever Begins",
      content: `
Ten years later, the village of Ìsẹ̀lú was no longer a village—it was a thriving town.

The school had become a college. The clinic was now a full hospital. Young entrepreneurs from across Nigeria came to learn.

And in a quiet compound, under the same mango tree where it all began, sat an older Fenwa and Ṣadé.

Their hair was gray, their faces lined with time, but their love was as strong as ever.

Their children played nearby—three bright souls who carried their names and values.

A young journalist approached.
Journalist:
“Mr. and Mrs. Ajibade, after all you’ve done, what is the secret to your success?”

Fenwa looked at Ṣadé, then smiled.
Fenwa:
“Love. Not the kind that shouts, but the kind that serves. The kind that stays.”

Ṣadé took his hand.
Ṣadé:
“We didn’t start with wealth. We started with truth. And truth builds empires.”

That night, as the stars lit the sky, they sat together, wrapped in a single cloth.

Fenwa:
“Do you remember our first night here?”

Ṣadé:
“How could I forget? You were just a man on a bicycle.”

Fenwa laughed.
Fenwa:
“And you were the woman who changed my life.”

They held each other as the drums played in the distance.

Not because of fame.
Not because of money.
But because of love.

And in that moment, they knew—
**Forever had already begun.**
`
    }
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      background: 'linear-gradient(to bottom, #fef7e0, #fff8f0)',
      minHeight: '100vh',
      padding: '20px',
      color: '#333'
    }}>
      {/* Header */}
      <header style={{
        textAlign: 'center',
        padding: '30px 20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#c68400'
        }}>Fenwa & Ṣadé</h1>
        <p style={{
          fontSize: '1.3rem',
          color: '#d97706'
        }}>A Legacy of Love</p>
      </header>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Chapter List */}
        <div style={{
          flex: '1',
          minWidth: '250px'
        }}>
          <div style={{
            background: '#fff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            maxHeight: '600px',
            overflowY: 'auto'
          }}>
            <h2 style={{
              textAlign: 'center',
              color: '#9c4a00',
              marginBottom: '15px'
            }}>Chapters</h2>
            {chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => setCurrentChapter(index)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  margin: '6px 0',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: currentChapter === index ? '#c68400' : '#fff9ed',
                  color: currentChapter === index ? '#fff' : '#9c4a00',
                  fontWeight: currentChapter === index ? 'bold' : 'normal',
                  transition: 'all 0.2s'
                }}
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Content */}
        <div style={{
          flex: '3',
          minWidth: '300px'
        }}>
          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            lineHeight: '2'
          }}>
            <h2 style={{
              color: '#9c4a00',
              borderBottom: '2px solid #fdba74',
              paddingBottom: '10px'
            }}>
              {chapters[currentChapter].title}
            </h2>
            <div style={{
              whiteSpace: 'pre-line',
              fontSize: '1.1rem',
              color: '#444'
            }}>
              {chapters[currentChapter].content}
            </div>

            {/* Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: '1px solid #eee'
            }}>
              <button
                onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                disabled={currentChapter === 0}
                style={{
                  padding: '10px 20px',
                  background: currentChapter === 0 ? '#ddd' : '#c68400',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentChapter === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                ← Previous
              </button>

              <span style={{
                alignSelf: 'center',
                color: '#666',
                fontSize: '0.9rem'
              }}>
                Chapter {currentChapter + 1} of {chapters.length}
              </span>

              <button
                onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
                disabled={currentChapter === chapters.length - 1}
                style={{
                  padding: '10px 20px',
                  background: currentChapter === chapters.length - 1 ? '#ddd' : '#c68400',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentChapter === chapters.length - 1 ? 'not-allowed' : 'pointer'
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        marginTop: '50px',
        color: '#666',
        fontSize: '0.9rem',
        padding: '20px'
      }}>
        © 2025 Fenwa & Ṣadé: A Legacy of Love | All rights reserved
      </footer>
    </div>
  );
}
