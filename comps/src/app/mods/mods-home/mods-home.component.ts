import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalVisible = false;
  items = [
    { title: 'Why is the sky blue?', content: 'Because of the air.' },
    {
      title: 'What does an orange taste like?',
      content: 'An orange tastes like an orange.',
    },
    {
      title: 'What color is that cat?',
      content: 'The cat has an orange color.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.modalVisible = !this.modalVisible;
  }
}
