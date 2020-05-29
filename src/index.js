import Component from '@wide/modulus/src/component'


/**
 * Accordion Component
 */
export default class Accordion extends Component {


  /**
   * Initialize accordion component
   */
  run() {

    /**
     * Questions elements
     * @type {Array<HTMLElement>}
     */
    this.questions = this.children('[aria-controls]')

    // listen click for toggling
    for(let i = 0; i < this.questions.length; i++) {
      this.listenQuestion(this.questions[i])
    }
  }


  /** 
   * Listen click event and toggle to related answer
   * @param {HTMLElement} question 
   */
  listenQuestion(question) {
    question.addEventListener('click', e => this.toggle(question))
  }


  /**
   * Toggle both question and answer
   * @param {HTMLElement} question 
   * @return {Promise}
   */
  toggle(question) {
    const answer = this.getAnswer(question)
    return this.isClose(answer)
      ? this.open(question, answer)
      : this.close(question, answer)
  }


  /**
   * Get question's answer based on `aria-controls` attribute
   * @param {HTMLELement} question 
   * @return {HTMLElement}
   */
  getAnswer(question) {
    const id = question.getAttribute('aria-controls')
    return document.getElementById(id)
  }


  /**
   * Check close state of a specific question
   * @param {HTMLElement} question 
   * @param {HTMLElement} answer 
   * @return {Bool}
   */
  isClose(answer) {
    return answer.hidden
  }


  /**
   * Open specific question and answer
   * @param {HTMLElement} question 
   * @param {HTMLElement} answer 
   * @return {Promise}
   */
  open(question, answer) {
    question.setAttribute('aria-expanded', true)
    answer.hidden = false
    return this.slideDown(answer)
  }


  /**
   * Slide down answer
   * @param {HTMLElement} el 
   * @return {Promise}
   */
  slideDown(el) {
    return Promise.resolve()
  }


  /**
   * Close specific question and answer
   * @param {HTMLElement} question 
   * @param {HTMLElement} answer 
   * @return {Promise}
   */
  close(question, answer) {
    question.setAttribute('aria-expanded', false)
    this.slideUp(answer).then(() => answer.hidden = true)
  }


  /**
   * Slide down answer
   * @param {HTMLElement} el 
   * @return {Promise}
   */
  slideUp(el) {
    return Promise.resolve()
  }

}
