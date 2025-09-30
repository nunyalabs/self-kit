// Unified questionnaire structure for all participant types
const studySites = {
  general: [
    'Atiebie Government Hospital',
    'Oda Government Hospital',
    'Suhum Government Hospital',
    'Atua Government Hospital',
    'Tetteh Quarshie Government Hospital',
    'Eastern Regional Health Directorate',
    'Other'
  ],
  herbalist: [
    'Centre for Plant Medicine Research(Mampong)'
  ]
};

const questionnaire = {
  clinician: {
    background: [
      { label: 'Participant ID', id: 'participantId', type: 'hidden', required: true },
      { label: 'Age Range', id: 'ageRange', type: 'select', options: ['18-29', '30-39', '40-49', '50-59', '60+'], required: true },
      { label: 'Gender', id: 'gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { label: 'Study Site/Facility', id: 'studySite', type: 'studysite', required: true },
      { label: 'Years of Experience', id: 'yearsExperience', type: 'number', required: true },
      { label: 'Contact Number', id: 'contactNumber', type: 'tel', required: false },
      { label: 'Preferred Contact Method', id: 'preferredContact', type: 'select', options: ['Phone Call', 'WhatsApp', 'Email'], required: false },
    ],
    interview: {
      'Current Practice and Observed Patient Behaviour': [
        'What are your most common treatment approaches for patients diagnosed with hypertension?',
        'Based on your experience, what have you noticed about your patients\' adherence to their treatment plans?',
        'What patterns have you observed in your patients\' use of alternative therapies, such as herbal remedies or traditional medicine, alongside their prescribed treatment?'
      ],
      'Attitudes Toward Integration': [
        'What are your professional views on integrating herbal or other lifestyle interventions into a conventional treatment plan for hypertension?',
        'Do you see this as a viable approach? What are the potential benefits and risks from your perspective?'
      ],
      'System Constraints and Digital Readiness': [
        'What do you feel are the biggest barriers within the health system that limit your ability to provide personalized or more holistic care?',
        'How open would you be to using a digital tool or platform to track a patient\'s treatment and self-management, including both conventional and alternative therapies?'
      ],
      'Final Remarks': [
        'Any further remarks or suggestions?'
      ],
    }
  },
  herbalist: {
    background: [
      { label: 'Participant ID', id: 'participantId', type: 'hidden', required: true },
      { label: 'Age Range', id: 'ageRange', type: 'select', options: ['18-29', '30-39', '40-49', '50-59', '60+'], required: true },
      { label: 'Gender', id: 'gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { label: 'Study Site/Facility', id: 'studySite', type: 'studysite', required: true },
      { label: 'Years Practicing', id: 'yearsPractice', type: 'number', required: true },
      { label: 'Contact Number', id: 'contactNumber', type: 'tel', required: false },
      { label: 'Preferred Contact Method', id: 'preferredContact', type: 'select', options: ['Phone Call', 'WhatsApp', 'Email'], required: false },
    ],
    interview: {
      'Common Treatments and Client Patterns': [
        'Which specific herbs or remedies do you commonly use in your practice for managing high blood pressure?',
        'Can you describe a typical client who comes to you for hypertension? What are the common symptoms or health issues they usually report?'
      ],
      'Integration and Collaboration Readiness': [
        'What are your thoughts on conventional hospital-based hypertension treatment?',
        'Would you be willing to collaborate with clinics or hospitals in a shared-care model for patients?'
      ],
      'Openness to Digital Tools': [
        'How would you feel about recording your patient data or participating in a digital study to better understand the effects of your treatments?'
      ],
      'Final Remarks': [
        'Any further remarks or suggestions?'
      ],
    }
  },
  caregiver: {
    background: [
      { label: 'Participant ID', id: 'participantId', type: 'hidden', required: true },
      { label: 'Age Range', id: 'ageRange', type: 'select', options: ['18-29', '30-39', '40-49', '50-59', '60+'], required: true },
      { label: 'Gender', id: 'gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { label: 'Study Site/Facility', id: 'studySite', type: 'studysite', required: true },
      { label: 'Relation to Patient', id: 'relation', type: 'text', required: true },
      { label: 'Contact Number', id: 'contactNumber', type: 'tel', required: false },
      { label: 'Preferred Contact Method', id: 'preferredContact', type: 'select', options: ['Phone Call', 'WhatsApp', 'Email'], required: false },
    ],
    interview: {
      'Care Role and Support': [
        'What kind of support do you provide to the person you care for who has hypertension?',
        'Do you help with things like medication reminders or monitoring their symptoms and blood pressure?'
      ],
      'Beliefs and Experiences with the Health System': [
        'What are your personal thoughts on using conventional clinic medicines versus herbs or other forms of spiritual help for managing the condition?',
        'Can you describe your interactions with health workers or herbalists on behalf of your relative?'
      ],
      'Attitude Toward Integration': [
        'If a health professional recommended a combined treatment of both hospital and herbal remedies, would you support your relative in trying it? Why or why not?'
      ],
      'Final Remarks': [
        'Any further remarks or suggestions?'
      ],
    }
  },
  policymaker: {
    background: [
      { label: 'Participant ID', id: 'participantId', type: 'hidden', required: true },
      { label: 'Age Range', id: 'ageRange', type: 'select', options: ['18-29', '30-39', '40-49', '50-59', '60+'], required: true },
      { label: 'Gender', id: 'gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { label: 'Study Site/Facility', id: 'studySite', type: 'studysite', required: true },
      { label: 'Department', id: 'organization', type: 'text', required: true },
      { label: 'Role/Title', id: 'role', type: 'text', required: true },
      { label: 'Contact Email', id: 'email', type: 'email', required: false },
      { label: 'Preferred Contact Method', id: 'preferredContact', type: 'select', options: ['Phone Call', 'WhatsApp', 'Email'], required: false },
    ],
    interview: {
      'Hypertension Management': [
        'What is your understanding of the current standards of hypertension management in Ghana?',
        'What is the official stance on integrating traditional or herbal medicine with conventional healthcare?',
      ],
      'Personalized Medicine': [
        'The concept of \'Personalized Medicine\' and \'N-of-1 trials\' aims to tailor treatments to individuals using digital tools. What is your perspective on this from a policy standpoint?',
      ],
      'Digital Health Solutions': [
        'What opportunities could digital health solutions like this create for healthcare in Ghana?',
        'What are the potential policy or regulatory challenges to implementing such personalized digital health approaches?',
        'What kind of evidence or data would be needed to support the wider adoption of such technologies in the Ghanaian healthcare system?',
        'How can we ensure that such digital solutions are equitable and accessible to all parts of the population?',
      ],
      'Final Remarks': [
        'Any further remarks or suggestions?'
      ],
    }
  },
  researcher: {
    background: [
      { label: 'Participant ID', id: 'participantId', type: 'hidden', required: true },
      { label: 'Age Range', id: 'ageRange', type: 'select', options: ['18-29', '30-39', '40-49', '50-59', '60+'], required: true },
      { label: 'Gender', id: 'gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { label: 'Study Site/Facility', id: 'studySite', type: 'studysite', required: true },
      { label: 'Institution', id: 'institution', type: 'text', required: true },
      { label: 'Field of Research', id: 'field', type: 'text', required: true },
      { label: 'Contact Email', id: 'email', type: 'email', required: false },
      { label: 'Preferred Contact Method', id: 'preferredContact', type: 'select', options: ['Phone Call', 'WhatsApp', 'Email'], required: false },
    ],
    interview: {
      'Research Focus and Experience': [
        'Can you tell me about the kinds of research you have conducted on hypertension or related health issues?',
        'What motivated you to focus your research on hypertension, or health research more broadly?'
      ],
      'Beliefs and Observations on Treatment Practices': [
        'From your research, what have you observed about how patients and communities manage hypertension?',
        'How do you view the role of conventional medicines versus herbal or spiritual remedies in hypertension management?'
      ],
      'Health System and Research Environment': [
        'What challenges have you faced in conducting research on hypertension in Ghana?',
        'Can you describe your interactions with clinicians, patients, or policymakers during your research work?'
      ],
      'Attitude Toward Integration': [
        'In your opinion, what are the potential benefits or risks of integrating hospital-based treatment with herbal or traditional approaches?',
        'How do you think such integration could be studied and evaluated effectively?'
      ],
      'Views on Digital Tools for Research': [
        'What role do you think digital or mobile platforms can play in collecting or managing research data on hypertension?',
        'Have you ever used digital tools (like mobile surveys, WhatsApp, or online platforms) in your research? If yes, what was your experience?',
        'What do you see as the advantages or limitations of using digital tools in studying hypertension in Ghana?'
      ],
      'Final Remarks': [
        'Any further remarks or suggestions?'
      ],
    }
  }
};

function generateParticipantId(type) {
  const prefixes = { clinician: 'CLN', herbalist: 'HRB', caregiver: 'CG', policymaker: 'POL', researcher: 'RES' };
  const prefix = prefixes[type] || 'PAR';
  let counts = JSON.parse(localStorage.getItem('participantCounts')) || {};
  counts[type] = (counts[type] || 0) + 1;
  localStorage.setItem('participantCounts', JSON.stringify(counts));
  return `${prefix}${counts[type].toString().padStart(3, '0')}`;
}

// Dynamically render background and interview questions for the selected group
export function setupDynamicQuestionnaire() {
  const introContainer = document.getElementById('questionnaireIntro');
  if(introContainer) {
    introContainer.innerHTML = `
      <h4 class="text-white">Participant Information & Consent</h4>
      <p class="text-white-50">
        You are invited to take part in a study on improving hypertension care in Ghana using digital approaches. Your participation is voluntary, and your responses will remain confidential.
      </p>
      <p class="text-white-50">
        You may answer by typing or recording audio (please start the recorder before answering, then download and send the file via WhatsApp).
      </p>
      <p class="text-white-50">
        There are no major risks. Your views will help improve personalised care. You may withdraw at any time without giving a reason.
      </p>
      <p class="text-white-50">
        By continuing, you confirm you have read this information and voluntarily agree to participate.
      </p>
      <p class="text-white-50">
        Contact: Godsway Sackey (Godsway.Sackey@student.hpi.uni-potsdam.de | +233 26 960 9634).
      </p>
      <p class="text-white-50">
        For more about the project: <a href="https://nunyalabs.github.io/uhas-hpi-about/" target="_blank">https://nunyalabs.github.io/uhas-hpi-about/</a>
      </p>
    `;
  }

  const participantTypeSelect = document.getElementById('participantType');
  if (!participantTypeSelect) return;
  participantTypeSelect.addEventListener('change', function () {
    renderBackgroundQuestions(this.value);
    renderInterviewQuestions(this.value);
  });
  // Initial render if value is pre-selected
  if (participantTypeSelect.value) {
    renderBackgroundQuestions(participantTypeSelect.value);
    renderInterviewQuestions(participantTypeSelect.value);
  }
  // Attach form submit handler
  const form = document.getElementById('participantQuestionnaire');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      collectAndSendResponses();
    });
  }

  setupSingleRecorder();
}

function renderBackgroundQuestions(type) {
  const container = document.getElementById('backgroundQuestions');
  if (!container) return;
  const qs = (questionnaire[type] && questionnaire[type].background) ? questionnaire[type].background : [];
  let html = '';
  qs.forEach(q => {
    const requiredAsterisk = q.required ? ' <span class="text-danger">*</span>' : '';
    if (q.type === 'select') {
      html += `<div class="mb-3"><label class="form-label text-white">${q.label}${requiredAsterisk}</label><select class="form-select" id="${q.id}" name="${q.id}"${q.required ? ' required' : ''}>
`;
      html += '<option value="">Select...</option>';
      q.options.forEach(opt => { html += `<option value="${opt}">${opt}</option>`; });
      html += '</select></div>';
    } else if (q.type === 'studysite') {
      let siteOptions = studySites.general;
      if (type === 'herbalist') {
        siteOptions = [...siteOptions, ...studySites.herbalist];
      }
      html += `<div class="mb-3"><label class="form-label text-white">${q.label}${requiredAsterisk}</label><select class="form-select" id="${q.id}" name="${q.id}"${q.required ? ' required' : ''}>
`;
      html += '<option value="">Select...</option>';
      siteOptions.forEach(opt => { html += `<option value="${opt}">${opt}</option>`; });
      html += '</select></div>';
      html += `<div class="mb-3 d-none" id="studySiteOtherDiv"><label class="form-label text-white">Please specify other site</label><input class="form-control" type="text" id="studySiteOther" name="studySiteOther"></div>`;
    } else if (q.type === 'hidden') {
      html += `<input type="hidden" id="${q.id}" name="${q.id}">`;
    } else {
      html += `<div class="mb-3"><label class="form-label text-white">${q.label}${requiredAsterisk}</label><input class="form-control" type="${q.type}" id="${q.id}" name="${q.id}"${q.required ? ' required' : ''}></div>`;
    }
  });
  container.innerHTML = html;

  const participantIdInput = document.getElementById('participantId');
  if (participantIdInput) {
    participantIdInput.value = generateParticipantId(type);
  }

  const studySiteSelect = document.getElementById('studySite');
  if (studySiteSelect) {
    studySiteSelect.addEventListener('change', function() {
      const otherDiv = document.getElementById('studySiteOtherDiv');
      if (this.value === 'Other') {
        otherDiv.classList.remove('d-none');
      } else {
        otherDiv.classList.add('d-none');
      }
    });
  }
}

import { startRecording, stopRecording, pauseRecording, downloadRecording, lastBlobByMode, lastFilenameByMode, isRecording } from './audio.js';

// ... (rest of the file is the same until renderInterviewQuestions)

function renderInterviewQuestions(type) {
  const container = document.getElementById('interviewQuestions');
  if (!container) return;
  const questionBlocks = (questionnaire[type] && questionnaire[type].interview) ? questionnaire[type].interview : {};
  let html = '';
  let questionCounter = 0;
  for (const blockTitle in questionBlocks) {
    html += `<h5 class="text-white mb-3">${blockTitle}</h5>`;
    questionBlocks[blockTitle].forEach(q => {
      html += `<div class="mb-4 interview-q-block">
        <p class="form-label text-white">${q}<span class="text-danger">*</span></p>
        <textarea class="form-control mb-2" id="interviewText_${questionCounter}" name="interviewText_${questionCounter}" rows="2" placeholder="Please type your answer here" required></textarea>
      </div>`;
      questionCounter++;
    });
  }
  container.innerHTML = html;
}

function setupSingleRecorder() {
    const recordBtn = document.getElementById('singleRecordBtn');
    const pauseBtn = document.getElementById('singlePauseBtn');
    const stopBtn = document.getElementById('singleStopBtn');
    const downloadBtn = document.getElementById('singleDownloadBtn');

    if (recordBtn) {
        recordBtn.addEventListener('click', () => {
            startRecording('questionnaire');
            recordBtn.disabled = true;
            stopBtn.disabled = false;
            pauseBtn.disabled = false;
        });
    }

    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            pauseRecording('questionnaire');
        });
    }

    if (stopBtn) {
        stopBtn.addEventListener('click', () => {
            stopRecording('questionnaire');
            recordBtn.disabled = false;
            stopBtn.disabled = true;
            pauseBtn.disabled = true;
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            downloadRecording('questionnaire');
        });
    }
}

async function collectAndSendResponses() {
  // Check if recording is in progress and alert the user
  if (isRecording) {
    alert('Please stop the audio recording before submitting your responses.');
    return; // Prevent form submission
  }

  // Collect background answers
  const participantType = document.getElementById('participantType').value;
  const backgroundQs = document.querySelectorAll('#backgroundQuestions input, #backgroundQuestions select');
  const backgroundAnswers = {};
  backgroundQs.forEach(q => { 
    if(q.id === 'studySite' && q.value === 'Other') {
      backgroundAnswers[q.name] = document.getElementById('studySiteOther').value;
    } else {
      backgroundAnswers[q.name] = q.value; 
    }
  });
  // Collect interview answers
  const interviewAnswers = [];
  const interviewTextareas = document.querySelectorAll('[id^="interviewText_"]');
  interviewTextareas.forEach((ta, idx) => {
    interviewAnswers.push({
      question: ta.previousElementSibling?.innerText || '',
      text: ta.value,
    });
  });

  // Prepare data for sending (simulate WhatsApp/email)
  const participantId = document.getElementById('participantId').value;
  let siteValue = document.getElementById('studySite').value;
  if (siteValue === 'Other') {
    siteValue = document.getElementById('studySiteOther').value;
  }
  const site = siteValue.replace(/ /g, '_');
  const date = new Date().toISOString().split('T')[0];

  // CSV File
  const csvContent = convertToCSV(backgroundAnswers, interviewAnswers);
  const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const csvFilename = `${participantId}_${date}_${site}.csv`;
  const csvFile = new File([csvBlob], csvFilename, { type: 'text/csv' });
  
  // Audio File
  const audioBlob = lastBlobByMode['questionnaire'];
  let audioFile = null;
  if (audioBlob) {
    const audioFilename = lastFilenameByMode['questionnaire'] || `${participantId}_${date}_${site}.wav`;
    audioFile = new File([audioBlob], audioFilename, { type: audioBlob.type });
  }

  const resultsDiv = document.getElementById('results');
  if(resultsDiv) {
    let html = `
      <h5>Thank you for your responses!</h5>
      <p>Please use the buttons below to share your recorded audio and text answers with the researcher via WhatsApp.</p>
      <div class="list-group">
    `;

    if (audioFile) {
      html += `
        <div class="list-group-item">
          <div class="d-flex w-100 justify-content-between">
            <h6 class="mb-1">1. Your Audio Recording</h6>
          </div>
          <p class="mb-1">Click the button to share your recorded audio answers.</p>
          <button class="btn btn-success mt-2" id="shareAudioBtn"><i class="bi bi-whatsapp"></i> Share Audio File</button>
        </div>
      `;
    }

    html += `
      <div class="list-group-item">
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">${audioFile ? '2. Your Text Answers' : '1. Your Text Answers'}</h6>
        </div>
        <p class="mb-1">Click the button to share your typed text answers.</p>
        <button class="btn btn-success mt-2" id="shareCsvBtn"><i class="bi bi-whatsapp"></i> Share Text File</button>
      </div>
    `;

    html += '</div>';
    html += `
      <div class="mt-4">
        <p class="text-white-50 small">If sharing does not work, you can download the files and send them manually to <strong>+233269609634</strong>.</p>
        ${audioFile ? `<a href="${URL.createObjectURL(audioFile)}" download="${audioFile.name}" class="btn btn-sm btn-outline-light me-2"><i class="bi bi-download"></i> Download Audio</a>` : ''}
        <a href="${URL.createObjectURL(csvFile)}" download="${csvFile.name}" class="btn btn-sm btn-outline-light"><i class="bi bi-download"></i> Download Text Data</a>
      </div>`;
    resultsDiv.innerHTML = html;
    attachShareHandlers(audioFile, csvFile);
  }
}

function convertToCSV(background, interview) {
  let csv = '';
  csv += 'Category,Question,Response\n';
  for(const key in background) {
    csv += `"Background","${key}","${background[key]}"\n`;
  }
  interview.forEach(ans => {
    csv += `"Interview","${ans.question.replace(/"/g, '\"\'')}","${ans.text.replace(/"/g, '\"\'')}"\n`;
  });
  return csv;
}

function attachShareHandlers(audioFile, csvFile) {
  const researcherWhatsApp = '+233269609634';
  const shareAudioBtn = document.getElementById('shareAudioBtn');
  const shareCsvBtn = document.getElementById('shareCsvBtn');

  const shareFile = async (file, introText) => {
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: file.name,
          text: introText,
        });
        console.log('File shared successfully');
      } catch (error) {
        console.error('Error sharing file:', error);
        alert('Sharing was cancelled or failed. Please download the file and send it manually.');
      }
    } else {
      // Fallback for browsers that don't support sharing files (e.g., desktop)
      const text = encodeURIComponent(`${introText}\nPlease find the attached file: ${file.name}`);
      window.open(`https://wa.me/${researcherWhatsApp}?text=${text}`, '_blank');
      alert('Your browser does not support direct file sharing. Please download the file and send it to the researcher via WhatsApp.');
    }
  };

  if (shareAudioBtn && audioFile) {
    shareAudioBtn.addEventListener('click', () => shareFile(audioFile, 'Hypertension Study: Audio Submission'));
  }
  if (shareCsvBtn && csvFile) {
    shareCsvBtn.addEventListener('click', () => shareFile(csvFile, 'Hypertension Study: Text Answers Submission'));
  }
}
