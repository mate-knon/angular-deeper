import {
  Component,
  DestroyRef,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'offline' | 'online' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    // When the value of current status changes, this code runs inside effect
    effect((onCleanup) => {
      console.log(this.currentStatus());

      onCleanup(() => {
        console.log('It happens before the effect code runs');
      });
    });
  }

  ngOnInit(): void {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
