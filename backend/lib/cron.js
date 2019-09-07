import { CronJob } from 'cron';
import { notifyIfNecessary } from './notifier';

const job = new CronJob({
  // every day at 8am, noon and 18pm
  // cronTime: '0 8,10,12,17,20 * * *',
  cronTime: '* * * * *',
  onTick: function() {
    console.log('sending emails to subscribers');
    notifyIfNecessary();
  },
  start: false,
  timeZone: 'America/Asuncion',
});

job.start();
