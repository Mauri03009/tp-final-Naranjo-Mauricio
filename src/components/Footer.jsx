

function Footer(){
  return (
    <>
        <footer className="bg-white border-t border-border py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Newsletter</h3>
                        <p className="text-sm text-muted-foreground">
                          Subscribe to our newsletter to get latest information about our charity.
                        </p>
                        <div className="flex space-x-2">
                          <input placeholder="Email" className="flex-1" />
                          <button className="bg-secondary hover:bg-secondary/90">Subscribe</button>
                        </div>
                        <p className="text-xs text-muted-foreground">By signing up, you agree to our Terms of Service.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Navigation</h3>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Home
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Campaign
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              About
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Contact
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">About Us</h3>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Our Story
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Careers
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Team
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Press
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Help</h3>
                        <div className="space-y-2 text-sm">
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              FAQ
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Contact
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Privacy Policy
                            </a>
                            <a href="#" className="block text-muted-foreground hover:text-foreground">
                              Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">© 2024 Charity Organization. All rights reserved.</p>
              </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;