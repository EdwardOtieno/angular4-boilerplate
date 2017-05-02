import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { dispatchEvent } from "@angular/platform-browser/testing/src/browser_util";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { DebugElement} from "@angular/core";
import { LoginComponent } from './login.component';

describe('my.component', () => {

    let comp: LoginComponent,
        fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule],
                declarations: [
                    LoginComponent
                ]
            }).compileComponents().then(() => {
                fixture = TestBed.createComponent(LoginComponent);
                comp = fixture.componentInstance;
                fixture.detectChanges();
            });
        })
    );
    it('should handle inputs', () => {
        const sendInputs = (inputs: Array<DebugElement>) => {
            inputs.forEach(input => {
                dispatchEvent(input.nativeElement, 'input');
            });
            fixture.detectChanges();
            return fixture.whenStable();
        };

        let inputs: Array<DebugElement> = fixture.debugElement.queryAll(By.css('input'));

        // set username input value
        inputs[0].nativeElement.value = "anitrai0113@gmail.com";

        // set email input value
        inputs[1].nativeElement.value = "s1562406011";

        sendInputs(inputs).then(() => {
            // emit click event to submit form
            fixture.nativeElement.querySelectorAll('button')[0].click();

            expect(comp.form.email).toBe("anitrai011@gmail.com");
            expect(comp.form.password).toBe("s152406011");
        });
    });
});
