#!/usr/bin/env -S node --loader ts-node/esm

import { importData } from './cli/import.js';
import { printVersion } from './cli/version.js';
import { printHelp } from './cli/help.js';
import { generateRandomOffersTSV } from './cli/generate.js';

const main = async () => {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    printHelp();
    return;
  }

  switch (args[0]) {
    case '--help':
      printHelp();
      break;

    case '--version':
      printVersion();
      break;

    case '--import':
      if (args[1] && args[2]) {
        await importData(args[1], args[2]);
      } else {
        console.log('Укажите путь к файлу для импорта.');
      }
      break;

    case '--generate':
      if (args[1] && args[2] && args[3]) {
        await generateRandomOffersTSV(parseInt(args[1], 10), args[2], args[3]);
      } else {
        console.log('Укажите аргументы в формате <n> <path> <url>');
      }
      break;

    default:
      console.log('Неизвестная команда. Для справки используйте --help');
      break;
  }
};

main();
