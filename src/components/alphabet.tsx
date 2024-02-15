'use client'

import { CaretDown } from '@/icons/CaretDown'
import * as Accordion from '@radix-ui/react-accordion'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'

const dictionary: { [code: string]: string } = {
  a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----',
}

const arrayDict = Object.entries(dictionary)

export function Alphabet() {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-full justify-between rounded border border-slate-400 p-4 text-left text-base font-medium text-slate-500 data-[state=open]:border-slate-600 ">
            Morse Dictionary
            <CaretDown className="text-slate-400 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="p-2">
          <span className="text-sm text-slate-500">Special character used by me to represent blank space: &apos;/&apos;</span>

          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead>Character</TableHead>
                <TableHead>Morse Equivalent</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {
                arrayDict.map(item => (
                  <TableRow key={item[0]}>
                    <TableCell>{item[0]}</TableCell>
                    <TableCell>{item[1]}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
