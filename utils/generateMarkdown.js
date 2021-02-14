// TODO: Create a const that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  console.log('license rest: ' + license);
  
  if (license === 'Apache License 2.0') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'

  } else if (license === 'Boost Software 1.0') {
    return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'

  } else if (license === 'GNU AGPL v3') {
    return 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg'

  } else if (license === 'GNU FDLv 1.3') {
    return 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg'

  } else if (license === 'GNU LGPL v3') {
    return 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg'

  } else if  (license === 'GNU GPL v3') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'

  } else if (license === 'ISC') {
    return 'https://img.shields.io/badge/License-ISC-blue.svg'

  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'

  } else if (license === 'MIT License') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'

  } else { 
    return ''
  }
}

// TODO: Create a const that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'

  } else if (license === 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt'

  } else if (license === 'GNU AGPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0'

  } else if (license === 'GNU FDLv 1.3') {
    return 'https://www.gnu.org/licenses/agpl-3.0'

  } else if (license === 'GNU LGPL v3') {
    return 'https://www.gnu.org/licenses/lgpl-3.0'

  } else if (license === 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/fdl-1.3'

  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC'

  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MIT'

  } else if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MPL-2.0'

  } else { 
    return ''
  }
}

// TODO: Create a const that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if(license === 'N/A') {
    return ''
  }

  return `
  ## License
  - ${license}
  `
}

const displayBadgeTop = license => {
  if(license === 'N/A') {
    return ''
  }

  return `
  [![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})
  `
}

const renderTableOfContents = license => {
  if(license === 'N/A') {
    return `
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
    `
  }

  return `
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
    `
}

// TODO: Create a const to generate markdown for README
// integrated into module exports
module.exports = generateMarkdown => {
  console.log(generateMarkdown);

  const { projectLicenses, ...data } = generateMarkdown
  console.log(projectLicenses)

  return `
  # ${data.projectTitle}
  ${displayBadgeTop(projectLicenses)}

  ## Description
  ${data.projectDescription}
  ${renderTableOfContents(projectLicenses)}

  ## Installation
  ${data.projectInstallation}

  ## Usage
  ${data.projectUsage}

  ## Contribution
  ${data.projectContribution}

  ## Testing
  ${data.projectTest}

  ${renderLicenseSection(projectLicenses)}

  ## Questions
  Any questions or concerns, please contact the developer through their GitHub or email:
  ${data.contactUsername}
  ${data.contactEmail}
  `
};
