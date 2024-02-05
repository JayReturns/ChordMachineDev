import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ChordService} from "../../services/chord.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingsForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private chordService: ChordService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.settingsForm = this.fb.group({
      endpoint: [this.chordService.getEndpoint().replace("http://", ""), [Validators.required, ipValidator()]]
    })
  }

  saveSettings() {
    if (this.settingsForm.valid) {
      console.log(this.settingsForm.value);
      localStorage.setItem('endpoint', this.settingsForm.value.endpoint);
      this.snackBar.open("Einstellungen erfolgreich gespeichert", undefined, {
        duration: 5000,
      })
    } else {
      this.snackBar.open("Einstellungen konnten nicht gespeichert werden", undefined, {
        duration: 5000,
      })
    }
  }

}

export function ipValidator(): ValidatorFn {
    return (control: AbstractControl) => {
    const regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}(?::\d{1,5})?$/;

    if (regex.test(control.value)) {
      return null;
    }

    return { ipError: true };
  };
}
