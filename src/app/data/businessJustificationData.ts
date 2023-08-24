export const businessJustificationData = [
  {
    attribute: 'urgencyCause',
    question: '* Why is this Change needed and why can’t it be delayed until after the freeze period ends?',
    sampleAnswer: 'This prod roll-out brings the required remediations which will get rid of those possible security flaws',
    placeholder: 'Example: This prod roll-out brings the required remediations which will get rid of those possible security flaws.'
  },
  {
    attribute: 'impactIfDeployed',
    question: 'What is the anticipated impact of this Change during the Planned Deployment Window?',
    sampleAnswer: 'No outage anticipated for existing customers',
    placeholder: 'Example: No outage anticipated for existing customers'
  },
  {
    attribute: 'isTested',
    question: 'Has the Change been tested, and will Testers be available during and after CR implementation?',
    sampleAnswer: 'Tested in NPE by developers and NPE support. Artifacts are attached to the CR.Testers will be available for validations post deployment.',
    placeholder: 'Example: Tested in NPE by developers and NPE support. Artifacts are attached to the CR. Testers will be available for validations post deployment.'
  },
  {
    attribute: 'whoTested',
    question: 'Who is testing this application post deployment?',
    sampleAnswer: 'Consumers',
    placeholder: 'Example: Consumers'
  },
  {
    attribute: 'rollBackPlan',
    question: 'Is there a tested Rollback Plan and how long does the Rollback takes to implement?',
    sampleAnswer: 'Rollback plan includes deploy the previous version. Rollback takes < 10 mins to implement.',
    placeholder: 'Example: Rollback plan includes deploy the previous version. Rollback takes < 10 mins to implement.'
  },
  {
    attribute: 'impactIfNotDeployed',
    question: '* What happens when we do it and it goes bad ... what break , what is the impact if our change doesn’t work as expected?',
    sampleAnswer: 'No impact to the front-line users. However, SAST vulnerability issue will reappear in the next scan report.',
    placeholder: 'Example: No impact to the front-line users. However, SAST vulnerability issue will reappear in the next scan report.'
  },
];







