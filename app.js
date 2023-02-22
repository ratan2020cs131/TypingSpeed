const task = document.querySelector('#task');
        const input = document.querySelector('#input');
        const result = document.querySelector('#result');
        const btn = document.querySelector('#btn');

        const taskArray = [
            'Bharata Khanda is a term used in Hindu texts, including the Vedas, Mahabharata, Ramayana and the Puranic, to describe the Indian subcontinent',
            'The Vedas are a collection of religious literature that dates back to ancient India. The books, written in Vedic Sanskrit, are the earliest stratum of Sanskrit literature as well as Hinduism oldest scriptures',
            'The superior man who conducts, whatever he does, the other human beings (ordinary human beings) also do the same behavior, the same thing',
            'Chandra Shekhar Azad, was an Indian revolutionary who reorganised the Hindustan Republican Association (HRA) under its new name of Hindustan Socialist Republican Association (HSRA) after the death of its founder, Ram Prasad Bismil',
            "Bose's legacy is mixed. Among many in India, he is the muscular hero, his saga serving as a would-be counterpoise to the many actions of regeneration, negotiation, and reconciliation over a quarter-century through which the independence of India was achieved",
            "In 1928 Bhagat Singh plotted with others to punish the police chief responsible for the death of Indian writer and politician Lala Lajpat Rai",
            "Ram Prasad Bismil (11 June 1897 — 19 December 1927) was an Indian poet, writer, revolutionary and an Indian freedom fighter who participated in the Mainpuri Conspiracy of 1918, and the Kakori Conspiracy of 1925, and fought against British Raj",
            "Pratap became a folk hero for his military resistance against the expansionism of the Mughal Empire under Akbar through guerrilla warfare which proved inspirational for later rebels against Mughals including Chhatrapati Shivaji",
            "Chatrapati Shivaji Maharaj was the founder of the Maratha Empire in western India. He is considered to be one of the greatest warriors of his time and even today, stories of his exploits are narrated as a part of the folklore. With his valor and great administrative skills, Shivaji carved out an enclave from the declining Adilshahi sultanate of Bijapur",
            "Bajirao ballal, during his 20-year tenure as a Peshwa, he defeated Nizam-ul-Mulk at several battles like the Battle of palkhed and Battle of Bhopal. Bajirao contributed to Maratha supremacy in southern India and northern India. Thus, he was partly responsible for establishing Maratha power in Gujarat, Malwa, Rajputana and Bundelkhand and liberating Konkan (in the western coast of India) from the Siddis of Janjira and Portuguese rule"
        ]

        var str;
        let start,end,count=0;

        btn.addEventListener('click',()=>{
            if(btn.innerHTML=='Start'){
                input.disabled=false;
                btn.innerHTML='Done';
                test();
                input.placeholder='Type above Phrase';

            }
            else if(btn.innerHTML=='Done'){
                input.disabled=true;
                btn.innerHTML='Start';
                ans();
                input.value='';
                input.placeholder='Show your typing speed';
            }
        })

        function test(){
            let r=Math.floor(Math.random()*taskArray.length);
            task.style.display='block';
            str=taskArray[r];
            task.style.backgroundColor='#ff99cc';
            task.innerHTML=str;
            let st=new Date();
            start=st.getTime();
        }
        function ans(){
            let et=new Date();
            end=et.getTime();
            let inputPhrase=input.value;
            console.log(inputPhrase);
            const str1=inputPhrase.split(' ');
            const str2=str.split(' ');
            let i=0;
            str1.forEach((s1)=>{
                if(s1===str2[i])
                    count++;
                i++;
            })
            let totalTime=Math.ceil(end-start)/1000;
            let word=Math.ceil((count/totalTime)*60);
            let accuracy=(count/str2.length)*100;
            let answer=`Your speed is ${word} WPM with an accuracy of ${Math.ceil(accuracy)}%.`;
            task.style.backgroundColor='#00ff00';
            task.innerHTML=answer;
            count=0;
        }