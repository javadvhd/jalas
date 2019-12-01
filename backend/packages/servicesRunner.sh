#!/usr/bin

function setup-api-gateway {
  cd ../apiGateway

  echo '···························'
  echo '·· setting up the api gateway  >>>> ··'
  echo '···························'

  yarn 
  yarn run dev

  # we go back to the root project
  cd -
}

function setup-meeting {
  cd ../services/meeting

  echo '···························'
  echo '·· setting up the meeting  >>>> ··'
  echo '···························'
  
  yarn 
  yarn run dev

  # we go back to the root project
  cd -
}


function setup-notification {
  cd ../services/notification

  echo '···························'
  echo '·· setting up the notification  >>>> ··'
  echo '···························'

  yarn 
  yarn run dev

  # we go back to the root project
  cd -
}

function setup-analytics {
  cd ../services/analytics

  echo '···························'
  echo '·· setting up the analytics  >>>> ··'
  echo '···························'

  yarn 
  yarn run dev

  # we go back to the root project
  cd -
}

function main {
    setup-api-gateway
    setup-meeting
    setup-notification
    setup-analytics
}

main
